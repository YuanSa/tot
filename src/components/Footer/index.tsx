import { FC } from "react";
import { useT } from "../../utils/language";
import { useLanguage } from "../LanguageProvider";
import styles from "./styles.module.scss";

export const Footer: FC = () => {
  const t = useT();
  const { language } = useLanguage();
  return (
    <footer className={styles.footer}>
      <div className={styles.motto}>{t`motto`}</div>
      <div className={styles["sponsor-list"]}>
        <a className={styles.sponsor} href={`https://semi.design/${language}/`}>
          {t("powered_by", {
            by: (
              <img
                className={styles["inline-logo"]}
                alt="Semi Design"
                src="https://lf9-static.semi.design/obj/semi-tos/images/a5768a90-324e-11ec-b393-ab4adc2e449f.svg"
              />
            ),
          })}
        </a>
      </div>
      <div className={styles.links}>
        <div className={styles["links-group"]}>
          <a
            className={styles.link}
            href="/help/privacy-policy"
            target="_blank"
          >
            {t`privacy_policy`}
          </a>
        </div>
        <div className={styles["links-group"]}>
          <a
            className={styles.link}
            href="https://beian.miit.gov.cn/"
            target="_blank"
          >
            冀ICP备17026957号
          </a>
          <a
            className={styles.link}
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51010802000387"
            target="_blank"
          >
            川公网安备51010802000387号
          </a>
        </div>
      </div>
    </footer>
  );
};
