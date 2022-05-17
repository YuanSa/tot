import { FC } from "react";
import { Header } from "../../components/Header";
import { useT } from "../../utils/languages/useT";
import styles from "./styles.module.scss";

export const ErrorPage: FC = () => {
  const t = useT();
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.texts}>
          <h1 className={styles.title}>{t`error_page_title`}</h1>
          <p className={styles.description}>{t`error_page_description`}</p>
        </div>
      </main>
    </>
  );
};
