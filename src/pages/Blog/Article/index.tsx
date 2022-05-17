import { useLanguage } from "@/components/LanguageProvider";
import { useT } from "@/utils/language";
import { Banner } from "@douyinfe/semi-ui";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { PagePathParam } from "../../../constants/PagePath";
import { useBlogArticle } from "./utils";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { BlogArticleInfoButton } from "./components/InfoButton";
import { useTitle } from "@/utils/hooks";

export const BlogArticle: FC = () => {
  const t = useT();
  const urlParams = useParams<PagePathParam>();
  const articleID = urlParams[PagePathParam.BlogArticleID];
  
  const { loading, reactNode, article, ready } = useBlogArticle(articleID);
  useTitle(article.title);

  const { language } = useLanguage();
  const languageMissMatch = !loading && language !== article.language;

  return (
    <main className={styles.main}>
      {languageMissMatch && (
        <Banner
          type="warning"
          description={t("blog_lang_mismatch", {
            targetLanguage: t(language),
            actualLanguage: t(article.language),
          })}
          className={styles.banner}
        />
      )}
      {/* {coverURL && <img className={styles.cover} src={coverURL} />} */}
      <article className={styles.article}>
        <section className={classNames(styles.page, "blog-article")}>
          {ready && reactNode}
        </section>
      </article>
      <BlogArticleInfoButton
        id={articleID}
      />
    </main>
  );
};
