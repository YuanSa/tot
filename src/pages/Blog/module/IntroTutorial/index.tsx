import { FC } from "react";
import { useT } from "@/utils/language";
import { GiBookshelf } from "react-icons/gi";
import styles from "./styles.module.scss";
import { Divider } from "@douyinfe/semi-ui";
import { ElegantArticleCard } from "../../components/ElegantArticleCard";
import { BlogModuleIntroTutorialConfig } from "./config";
import { numToAlpha } from "@/utils/text";

export const BlogModuleIntroTutorial: FC = () => {
  const t = useT();

  return (
    <main className={styles.page}>
      <div className={styles.cover}>
        <div className={styles.icon}>
          <GiBookshelf />
        </div>
        <h1 className={styles.title}>{t`intro_tutorial`}</h1>
        <p className={styles.subtitle}>从零开始，学习“创造艺术”的前端技术</p>
      </div>
      <Divider dashed />
      {BlogModuleIntroTutorialConfig.map((section, sectionIndex) => (
        <section className={styles.section} key={sectionIndex}>
          <h2 className={styles.title}>{section.sectionTitle}</h2>
          <div className={styles["card-list"]}>
            {section.articleList.map((article, articleIndex) => (
              <ElegantArticleCard
                key={articleIndex}
                className={styles.card}
                index={`${numToAlpha(sectionIndex)}${articleIndex + 1}`}
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
