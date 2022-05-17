import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Badge, Tooltip } from "@douyinfe/semi-ui";
import { useT } from "@/utils/language";

export interface MiniCardProps {
  icon: ReactNode;
  name: ReactNode;
  disabled?: boolean;
  className?: string;
  index?: number;
  onClick?: () => void;
}
export const MiniCard: FC<MiniCardProps> = ({
  icon,
  name,
  disabled = false,
  className,
  index = 0,
  onClick,
}) => {
  const t = useT();
  const hueRotate = (index * 60) % 360;

  return (
    <Badge
      count={disabled ? t`under_construction` : null}
      theme="solid"
      type="tertiary"
    >
      <div
        className={classNames(
          styles.card,
          disabled && styles.disabled,
          className
        )}
        onClick={onClick}
      >
        <div
          className={styles.gradient}
          style={{ backgroundImage: `var(--gradient-${index})` }}
        />
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>{name}</div>
      </div>
    </Badge>
  );
};
