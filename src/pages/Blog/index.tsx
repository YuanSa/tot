import { FC } from "react";
import { useT } from "../../utils/languages/useT";
import styles from "./styles.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { PagePath } from "../../constants/PagePath";

export const BlogPage: FC = () => {
  const t = useT();
  return (
    <main className={styles.page}>
      <div>
        <h1 className={styles.title}>{t`blog_title`}</h1>
        <p className={styles.subtitle}>{t`blog_subtitle`}</p>
      </div>
      <div className={styles.cards}>
        <Link to={PagePath.BlogIdeas} className={styles.card}>
          <span>Ideas</span>
          <HiOutlineArrowNarrowRight className={styles.icon} />
        </Link>
        <Link to={PagePath.BlogTutorials} className={styles.card}>
          <span>Tutorial</span>
          <HiOutlineArrowNarrowRight className={styles.icon} />
        </Link>
      </div>
    </main>
    // <lottie-player
    //   src="https://assets8.lottiefiles.com/packages/lf20_znxtcbvh33.json"
    //   background="transparent"
    //   speed="1"
    //   style={{ width: 300, height: 300 }}
    //   loop
    //   autoplay
    // />
  );
};
