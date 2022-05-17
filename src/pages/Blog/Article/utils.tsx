import { ReactNode, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import {
  LanguageCode,
  useLanguage,
} from "../../../components/LanguageProvider";

export interface BlogArticleMeta {
  id?: string;
  originalLanguage?: LanguageCode;
  supportedLanguage?: LanguageCode[];
  createTime?: string;
  updateTime?: string;
  cover?: string;
  sourceURL?: string;
}

export interface BlogArticle extends BlogArticleMeta {
  title?: string;
  author?: string;
  translator?: string;
  description?: string;
  content?: string;
  createTime?: string;
  updateTime?: string;
  language?: LanguageCode;
  cover?: string;
  sourceURL?: string;
}

export const useBlogArticle = (blogArticleID?: string) => {
  const [meta, setMeta] = useState<BlogArticle>({});
  const [article, setArticle] = useState<BlogArticle>({});
  const [markdown, setMarkdown] = useState<string>();
  const [reactNode, setReactNode] = useState<ReactNode>(null);
  const [loadingMeta, setLoadingMeta] = useState(Boolean(blogArticleID));
  const [loadingArticle, setLoadingArticle] = useState(false);

  const [error, setError] = useState<Error>();

  const { language: userLanguage } = useLanguage();
  const targetLanguage = meta.supportedLanguage?.includes(userLanguage)
    ? userLanguage
    : meta.originalLanguage;

  // Get meta data
  useEffect(() => {
    if (blogArticleID) {
      setLoadingMeta(true);
      import(`../../../assets/blog-article/meta-${blogArticleID}.json`)
        .then((module) => setMeta(module.default))
        .catch((err) => setError(new Error(err)))
        .finally(() => setLoadingMeta(false));
    }
  }, [blogArticleID]);

  // Get article data
  useEffect(() => {
    if (blogArticleID && targetLanguage) {
      setLoadingArticle(true);
      import(
        `../../../assets/blog-article/article-${blogArticleID}.${targetLanguage}.json`
      )
        .then((newArticle: BlogArticle) => {
          setArticle(newArticle);
          setMarkdown(newArticle.content);
          setReactNode(
            <ReactMarkdown
              children={newArticle.content ?? ""}
              rehypePlugins={[rehypeHighlight]}
              
            />
          );
        })
        .finally(() => setLoadingArticle(false));
    }
  }, [blogArticleID, targetLanguage]);

  // cover
  const [loadingCover, setLoadingCover] = useState(false);
  const originalCoverUrl = article.cover ?? meta.cover;
  const [coverURL, setCoverURL] = useState();
  useEffect(() => {
    if (originalCoverUrl) {
      setLoadingCover(true);
      import(`../../../assets/image/image-${originalCoverUrl}.jpg`)
        .then((res) => setCoverURL(res.default))
        .finally(() => setLoadingCover(false));
    }
  }, [originalCoverUrl]);

  const loading = loadingMeta || loadingArticle || loadingCover;
  const ready = Boolean(reactNode);

  return { meta, article, coverURL, markdown, reactNode, loading, error, ready };
};
