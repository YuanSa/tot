import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Badge } from "@douyinfe/semi-ui";
import { BadgeType } from "@douyinfe/semi-ui/lib/es/badge";

export interface ElegantArticleCardProps {
  index?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  badge?: ReactNode;
  badgeType?: BadgeType;
  className?: string;
}
export const ElegantArticleCard: FC<ElegantArticleCardProps> = ({
  index,
  title,
  description,
  disabled,
  badge = null,
  badgeType = 'tertiary',
  className,
}) => {
  return (
    <div
      className={classNames(
        styles.card,
        disabled && styles.disabled,
        className
      )}
    >
      <div className={styles.index}>{index}</div>
      <div className={styles.title}>
        <Badge className={styles.badge} count={badge} type={badgeType}>
          {title}
        </Badge>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
