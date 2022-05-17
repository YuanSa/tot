import { CSSProperties, FC } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { FiExternalLink } from "react-icons/fi";
import { ResumeSectionItem } from "../../contents/types";

export interface ExperienceProps extends ResumeSectionItem {
  className?: string;
  style?: CSSProperties;
}
export const Experience: FC<ExperienceProps> = ({
  title,
  subtitle,
  location,
  date,
  highlights = [],
  links = [],
  className,
  style,
}) => {
  return (
    <article className={classNames(styles.section, className)} style={style}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.main}>
            <h3 className={styles.summary}>{title}</h3>
            {(links?.length ?? 0) > 0 && (
              <ul className={styles.links}>
                {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
                {links!.map((link, index) => (
                  <li className={styles.link} key={index}>
                    <a
                      className={styles["link-contents"]}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {subtitle && <p className={styles.description}>{subtitle}</p>}
        </div>
        <div className={styles.extra}>
          {location && <div className={styles.location}>{location}</div>}
          <div className={styles.period}>{date}</div>
        </div>
      </div>
      {highlights.length === 1 ? (
        <p className={classNames(styles.details, styles.single)}>
          {highlights[0]}
        </p>
      ) : (
        <ul className={styles.details}>
          {highlights.map((highlightPoint, index) => (
            <li className={styles["details-item"]} key={index}>
              <span>{highlightPoint}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
