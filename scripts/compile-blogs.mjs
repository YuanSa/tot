import { readdir, readFile, stat, writeFile, watch } from "fs/promises";
import process from "process";
import { join } from "path";
import sortObject from "deep-sort-object";

const [_processor, _filePath, inputPath, outputPath] = process.argv;

const DefaultLanguage = "zh-CN";

const metaInfo = new Map();

/**
 * Compile Markdown to JSON with meta info
 *
 * @param {{ path: string, name: string, lang: string }} options info about the input file
 * @returns compiled output object
 */
async function compileFile({ path, name, lang }) {
  const inputFile = await readFile(path, { encoding: "utf-8" });
  const inputFileStat = await stat(path);
  const outputFileObj = {
    id: name.toLowerCase().replace(/[\s-]+/g, "-"),
    title: [...inputFile.match(/^# (.*?)$/m)][1],
    createTime: inputFileStat.birthtime.getTime(),
    updateTime: inputFileStat.mtime.getTime(),
    content: inputFile.trim(),
    language: lang,
  };
  // if has meta parts, parse them then update meta section
  if (inputFile.match(/^-{3,}\r\n/g)) {
    const [metaSectionStart, metaSectionEnd] = inputFile.matchAll(/^-{3,}$/gm);
    inputFile
      .slice(
        metaSectionStart.index + metaSectionStart[0].length,
        metaSectionEnd.index
      )
      .split("\r\n")
      .filter(Boolean)
      .map((pair) => pair.split(":").map((str) => str.trim()))
      .forEach(([k, v]) =>
        Object.assign(outputFileObj, { [k]: JSON.parse(v) })
      );
    outputFileObj.content = outputFileObj.content
      .slice(metaSectionEnd.index + metaSectionEnd[0].length)
      .trim();
  }
  return sortObject(outputFileObj);
}

async function execFile(path, name) {
  const p = name.split(".");
  const fileName = p[0];
  const lang = p[2] ? p[1] : DefaultLanguage;
  const outputObj = await compileFile({
    path: join(path, name),
    name: fileName,
    lang: lang,
  });
  const oldMetaInfo = metaInfo.get(outputObj.id) || {};
  metaInfo.set(outputObj.id, {
    id: outputObj.id,
    createTime: Math.min(
      outputObj.createTime,
      oldMetaInfo.createTime || Infinity
    ),
    updateTime: Math.max(
      outputObj.updateTime,
      oldMetaInfo.updateTime || -Infinity
    ),
    supportedLanguage: [...(oldMetaInfo.supportedLanguage ?? []), lang],
    originalLanguage:
      !oldMetaInfo.createTime ||
      (oldMetaInfo.createTime || Infinity) > outputObj.createTime
        ? lang
        : oldMetaInfo.originalLanguage,
  });
  await writeFile(
    join(outputPath, `article-${outputObj.id}.${lang}.json`),
    JSON.stringify(outputObj, null, 2),
    {
      flag: "w",
    }
  );
}

async function execDir(path) {
  const dir = await readdir(path, { withFileTypes: true });
  for (const item of dir) {
    if (item.isFile() && item.name.toLowerCase().endsWith(".md")) {
      await execFile(path, item.name);
    }
  }
}

async function execMeta() {
  for (const [id, obj] of metaInfo.entries()) {
    await writeFile(
      join(outputPath, `meta-${id}.json`),
      JSON.stringify(
        { ...obj, supportedLanguage: [...new Set(obj.supportedLanguage)] },
        null,
        2
      ),
      { flag: "w" }
    );
  }
}

let timer = 0;
async function openEyes(dir) {
  const watcher = watch(dir);
  for await (const event of watcher) {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      await execFile(dir, event.filename);
      await execMeta();
    }, 100);
  }
}

await execDir(inputPath);
await execMeta();
console.log("  正在监听文件变化，你可以开始编辑博客了  ");
await openEyes(inputPath);
