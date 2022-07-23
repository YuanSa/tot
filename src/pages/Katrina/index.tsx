import { FC, useState } from "react";
import { useT } from "@/utils/language";
import styles from "./styles.module.scss";
import { VscNewFile, VscFile } from "react-icons/vsc";
import { Katrina } from "./types";
import { PageKatrinaOpenFile } from "./pages/OpenFile";
import { PageKatrinaEditor } from "./pages/Editor";

const KatrinaSDKVersion = "0.1.0";

export const PageKatrina: FC = () => {
  const [katrina, setKatrina] = useState<Katrina>();
  const t = useT();

  if (!katrina) {
    return <PageKatrinaOpenFile onChange={(file) => setKatrina(file)} />;
  }

  return <PageKatrinaEditor initFile={katrina} />;
};
