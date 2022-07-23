import { FC, useState } from "react";
import { useT } from "@/utils/language";
import styles from "./styles.module.scss";
import { VscNewFile, VscFile } from "react-icons/vsc";
import { Katrina } from "../../types";
import template from "./template.json";

interface PageKatrinaOpenFileProps {
  onChange: (newFile: Katrina) => unknown;
}
export const PageKatrinaOpenFile: FC<PageKatrinaOpenFileProps> = ({
  onChange,
}) => {
  const t = useT();

  const handleCreateNewFile = () => onChange(template);

  const handleOpenFile = () => {};

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{t`X-YuanSa FAQ`}</h1>
      <p className={styles.subtitle}>{t`X-Choose a way to start your FAQ`}</p>
      <div className={styles.cards}>
        <article className={styles.card} onClick={handleCreateNewFile}>
          <VscNewFile className={styles["card-icon"]} />
          <div className={styles["card-title"]}>{t`X-Create New File`}</div>
        </article>
        <article className={styles.card}>
          <VscFile className={styles["card-icon"]} />
          <div
            className={styles["card-title"]}
          >{t`X-Open An Existing File`}</div>
        </article>
      </div>
    </main>
  );
};
