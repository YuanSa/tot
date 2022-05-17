import { Dropdown } from "@douyinfe/semi-ui";
import classNames from "classnames";
import { FC } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useT } from "../../../../utils/language";
import { supportedTheme } from "../../../ThemeProvider";
import { Theme, useTheme } from "../../../ThemeProvider";
import styles from "./styles.module.scss";

const mapThemeToName: Record<Theme, string> = {
  dark: "dark_mode",
  light: "light_mode",
};

export interface ThemeButtonProps {
  className?: string;
}
export const ThemeButton: FC<ThemeButtonProps> = ({ className }) => {
  const { theme, setTheme, isFollowingSystemTheme } = useTheme();
  const t = useT();
  return (
    <Dropdown
      showTick
      position="bottomRight"
      trigger="click"
      render={
        <Dropdown.Menu>
          <Dropdown.Title>{t`color_mode`}</Dropdown.Title>
          {supportedTheme.map((itemThemeCode) => (
            <Dropdown.Item
              active={!isFollowingSystemTheme && theme === itemThemeCode}
              key={itemThemeCode}
              onClick={() => setTheme(itemThemeCode)}
            >
              {t(mapThemeToName[itemThemeCode])}
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item
            active={isFollowingSystemTheme}
            onClick={() => setTheme(undefined)}
          >
            {t`follow_system`}
          </Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <div className={classNames(styles.wrapper, className)}>
        {theme === "dark" ? (
          <MdDarkMode className={styles.icon} />
        ) : (
          <MdLightMode className={styles.icon} />
        )}
      </div>
    </Dropdown>
  );
};
