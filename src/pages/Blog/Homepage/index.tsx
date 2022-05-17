import { FC } from "react";
import styles from "./styles.module.scss";
import { MiniCard } from "./components/MiniCard";
import {
  GiTechnoHeart,
  GiClassicalKnowledge,
  GiBookshelf,
  GiAncientScrew,
} from "react-icons/gi";
import { useT } from "@/utils/language";
import { useTitle } from "@/utils/hooks";
import { useNavigate } from "react-router-dom";
import { PagePath } from "@/constants/PagePath";

export const BlogHomepage: FC = () => {
  const t = useT();
  useTitle(t`blog_title`);
  const navigate = useNavigate();
  const navigateTo = (destination: PagePath) => () =>
    navigate(`${PagePath.BlogModule}/${destination}`);

  return (
    <main className={styles.page}>
      <section className={styles["section-1"]}>
        <GiAncientScrew className={styles.logo} />
        <h1 className={styles.title}>{t`blog_title`}</h1>
        <p className={styles.subtitle}>{t`blog_subtitle`}</p>
        <div className={styles.contents}>
          <MiniCard
            icon={<GiBookshelf />}
            name={t`intro_tutorial`}
            index={2}
            onClick={navigateTo(PagePath.BlogModule_IntroTutorial)}
          />
          <MiniCard
            icon={<GiClassicalKnowledge />}
            name={t`tech_topic`}
            index={0}
            disabled
          />
          <MiniCard
            icon={<GiTechnoHeart />}
            name={t`resource_sharing`}
            disabled
          />
        </div>
      </section>
    </main>
  );
};
