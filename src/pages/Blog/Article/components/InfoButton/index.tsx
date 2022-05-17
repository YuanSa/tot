import { FC } from "react";
import { Descriptions, Modal } from "@douyinfe/semi-ui";
import { useLanguage } from "@/components/LanguageProvider";
import { useBlogArticle } from "../../utils";
import { useT } from "@/utils/language";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useTimeDistanceDescription } from "@/utils/hooks";

interface BlogArticleInfoButtonProps {
  id?: string;
  className?: string;
  onClick?: () => void;
}
export const BlogArticleInfoButton: FC<BlogArticleInfoButtonProps> = ({
  className,
  id,
}) => {
  const { isMonoWidthLanguage } = useLanguage();
  const { loading, meta, article } = useBlogArticle(id);
  const [modal, contextHolder] = Modal.useModal();

  const getTimeDistanceDescription = useTimeDistanceDescription();

  const t = useT();

  const handleClick = () => {
    modal.info({
      title: article.title,
      icon: null,
      content: (
        <Descriptions
          data={[
            {
              key: "作者",
              value: article.author,
            },
            {
              key: "原始语言",
              value: t(meta.originalLanguage),
            },
            {
              key: "可用语言",
              value: meta.supportedLanguage
                ?.map((language) => t(language))
                .join(t("mark_list_item_separator")?.toString() ?? ""),
            },
            {
              key: "首发时间",
              value: getTimeDistanceDescription(meta.createTime),
            },
            {
              key: "更新时间",
              value: getTimeDistanceDescription(meta.updateTime),
            },
            {
              key: "原文链接",
              value: (
                <a href={meta.sourceURL} target="_blank">
                  {t("X-test")}
                </a>
              ),
            },
          ]}
        />
      ),
      footer: null, // TODO: 美化
      closeOnEsc: true,
      centered: true,
    });
  };

  if (!id || loading) {
    return null;
  }

  return (
    <>
      <div
        className={classNames(
          styles.wrapper,
          isMonoWidthLanguage && styles.unbreakable,
          className
        )}
        onClick={handleClick}
      >
        <div className={classNames(styles.front)}>{t`article_information`}</div>
        <div className={classNames(styles.back)}>{t`article_information`}</div>
      </div>
      {contextHolder}
    </>
  );
};
