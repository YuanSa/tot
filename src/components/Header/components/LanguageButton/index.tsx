import { Dropdown, Spin } from "@douyinfe/semi-ui";
import classNames from "classnames";
import { FC } from "react";
import { MdLanguage } from "react-icons/md";
import { useT } from "../../../../utils/language";
import {
  LanguageCode,
  supportedLanguage,
  useLanguage,
} from "../../../LanguageProvider";
import styles from "./styles.module.scss";

const mapLanguageCodeToName: Record<LanguageCode, string> = {
  "en-US": "English",
  "zh-CN": "中文",
};

export interface LanguageButtonProps {
  className?: string;
}
export const LanguageButton: FC<LanguageButtonProps> = ({ className }) => {
  const { language, setLanguage, isFollowingSystemLanguage, isLoading } =
    useLanguage();
  const t = useT();
  return (
    <Dropdown
      showTick
      position="bottomRight"
      trigger="click"
      render={
        <Dropdown.Menu>
          <Dropdown.Title>{t`language`}</Dropdown.Title>
          {supportedLanguage.map((itemLanguageCode) => {
            const isActive =
              !isFollowingSystemLanguage && language === itemLanguageCode;
            return (
              <Dropdown.Item
                active={isActive}
                key={itemLanguageCode}
                onClick={() => setLanguage(itemLanguageCode)}
              >
                {mapLanguageCodeToName[itemLanguageCode]}
                {!isActive && ` ${t('mark_parentheses_pair', {contents: t(itemLanguageCode)})}`}
              </Dropdown.Item>
            );
          })}
          <Dropdown.Divider />
          <Dropdown.Item
            active={isFollowingSystemLanguage}
            onClick={() => setLanguage(undefined)}
          >
            {t`follow_system`}
          </Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <div className={classNames(styles.wrapper, className)}>
        {isLoading ? (
          <Spin wrapperClassName={styles.icon} size="small" />
        ) : (
          <MdLanguage className={styles.icon} />
        )}
        <span className={styles.text}>{mapLanguageCodeToName[language]}</span>
      </div>
    </Dropdown>
  );
};
