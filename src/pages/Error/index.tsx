import { useT } from "@/utils/language";
import { useWebsiteConfig } from "@/utils/requests";
import { getEmailLink } from "@/utils/text";
import { Button } from "@douyinfe/semi-ui";
import { FC, useMemo } from "react";
import { GiAncientRuins } from "react-icons/gi";
import { BiMailSend } from "react-icons/bi";
import styles from "./styles.module.scss";

interface ErrorPageProps {
  error?: Error;
}
export const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  const t = useT();
  const config = useWebsiteConfig();
  const emailConfig = useMemo(
    () =>
      getEmailLink(config.contactEmail, {
        subject: t`error_contract_email_subject`?.toString(),
        body: t("error_contract_email_body", {
          url: window.location.href,
          time: new Date().toString(),
          stack: error?.stack,
        })?.toString(),
      }),
    [error, config.contactEmail]
  );
  if (!error) return null;
  return (
    <div className={styles.error}>
      <GiAncientRuins className={styles.icon} />
      <div className={styles.contents}>
        <h1 className={styles.title}>{t`error_occurred_title`}</h1>
        <p className={styles.description}>{t`error_occurred_description`}</p>
        <a className={styles["contact-button"]} href={emailConfig}>
          <BiMailSend className={styles['button-icon']} />
          <span>{t`error_contract_contact`}</span>
        </a>
      </div>
    </div>
  );
};
