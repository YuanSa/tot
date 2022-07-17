import { FC } from "react";
import { useT } from "@/utils/language";
import { GiBookshelf } from "react-icons/gi";
import styles from "./styles.module.scss";
import { Divider, Empty } from "@douyinfe/semi-ui";
import { ElegantArticleCard } from "../../components/ElegantArticleCard";
import { numToAlpha } from "@/utils/text";
import { useIntroTutorialConfig } from "@/config/intro-tutorial";
import { ErrorPage } from "@/pages/Error";

export const BlogModuleIntroTutorial: FC = () => {
  const t = useT();
  const { config, loading, error } = useIntroTutorialConfig();

  if (error) {
    return (
      <main>
        <ErrorPage error={new Error('Test')} />
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.cover}>
        <div className={styles.icon}>
          <GiBookshelf />
        </div>
        <h1 className={styles.title}>{t`intro_tutorial`}</h1>
        <p className={styles.subtitle}>{t`intro_tutorial_subtitle`}</p>
      </div>
      <Divider dashed />
      {config?.map((section, sectionIndex) => (
        <section className={styles.section} key={sectionIndex}>
          <h2 className={styles.title}>{section.sectionTitle}</h2>
          <div className={styles["card-list"]}>
            {section.articleList.map((article, articleIndex) => (
              <ElegantArticleCard
                key={articleIndex}
                className={styles.card}
                index={
                  article.index ??
                  `${numToAlpha(sectionIndex)}${articleIndex + 1}`
                }
                title={article.title}
                description={article.description}
                disabled={article.disabled}
                badge={article.badge}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};
