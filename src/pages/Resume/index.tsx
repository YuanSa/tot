import classNames from "classnames";
import { FC } from "react";
import { useT } from "../../utils/languages/useT";
import { Experience } from "./components/Experience";
import styles from "./styles.module.scss";
import { useLanguage } from "../../contexts/Language";
import useSWR from "swr";
import { FloatButton, Tooltip } from "antd";
import type { Resume } from "./contents/types";
import { IconPrint } from "../../components/Icon";
import { ResumeQRCode } from "./components/QRCode";

/**
 * @todo segmental phone number
 */
export const ResumePage: FC = () => {
  const t = useT();
  const { language } = useLanguage();
  const { data, isLoading } = useSWR<Resume>(`resume-${language}`, () =>
    import(`./contents/${language}.json`).then((result) => result.default)
  );

  if (isLoading || !data) {
    return "Loading";
  }

  return (
    <>
      <main className={styles.resume}>
        <div className={styles.page}>
          <section
            className={classNames(styles.section, styles["personal-info"])}
          >
            <div
              className={classNames("screen-only", styles["print-hint"])}
            >{t`print_if_you_like`}</div>
            <h1 className={styles.name}>{data.name}</h1>
            {data.contacts && (
              <address className={styles.contacts}>
                {data.contacts.phone && (
                  <a
                    className={styles["contact-item"]}
                    href={`tel:${data.contacts.phone}`}
                  >
                    {data.contacts.phone}
                  </a>
                )}
                {data.contacts.email && (
                  <a
                    className={styles["contact-item"]}
                    href={`mailto:${data.contacts.email}`}
                  >
                    {data.contacts.email}
                  </a>
                )}
                {data.contacts.address && (
                  <span className={styles["contact-item"]}>
                    {data.contacts.address}
                    {data.contacts.postCode && ` (${data.contacts.postCode})`}
                  </span>
                )}
              </address>
            )}
          </section>
          {data.sections.map((section, index) => (
            <section key={index} className={styles.section}>
              <h2 className={styles["section-title"]}>{section.title}</h2>
              {section.items.map((item, index) => (
                <Experience
                  key={index}
                  className={styles["section-item"]}
                  {...item}
                />
              ))}
            </section>
          ))}
          <ResumeQRCode
            text={t`read_this_resume_online`}
            className={classNames(styles["qr-code"], "print-only")}
          />
        </div>
      </main>
      <Tooltip title={t`print`} placement="left">
        <FloatButton
          className="screen-only"
          icon={<IconPrint />}
          onClick={window.print}
        />
      </Tooltip>
    </>
  );
};
