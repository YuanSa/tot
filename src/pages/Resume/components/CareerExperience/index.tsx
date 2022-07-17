import { CSSProperties, FC, ReactNode } from "react";
import { useT } from "@/utils/language";
import styles from "./styles.module.scss";
import classNames from "classnames";

export interface CareerExperienceProps {
  summary: string;
  description?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  details: ReactNode[];

  className?: string;
  style?: CSSProperties;
}
export const CareerExperience: FC<CareerExperienceProps> = (props) => {
  const t = useT();

  return (
    <article className={props.className} style={props.style}>
      <header className={styles.header}>
        <div className={styles.title}>
          <div className={styles.summary}>{props.summary}</div>
          {props.description && (
            <div className={styles.description}>{props.description}</div>
          )}
        </div>
        <div className={styles.extra}>
          {props.location && (
            <div className={styles.location}>{props.location}</div>
          )}
          <div className={styles.period}>
            {props.startDate}{" "}
            {props.endDate ? `${t`to`} ${props.endDate}` : t`till_now`}
          </div>
        </div>
      </header>
      {props.details.length === 1 ? (
        <p className={classNames(styles.details, styles.single)}>
          {props.details[0]}
        </p>
      ) : (
        <ul className={styles.details}>
          {props.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </article>
  );
};
