import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Typography } from "@douyinfe/semi-ui";
import styles from "./styles.module.scss";
import { PagePath } from "../../constants/PagePath";
import classNames from "classnames";
import { useT } from "@/utils/language";
import { LanguageButton } from "./components/LanguageButton";
import { ThemeButton } from "./components/ThemeButton";
import { WidthButton } from "./components/WidthButton";

const { Text } = Typography;

const navConfig = [
  { textKey: "blog", link: PagePath.Blog },
  { textKey: "resume", link: PagePath.Resume },
  { textKey: "service", link: PagePath.Service },
  { textKey: "price", link: PagePath.Price },
  { textKey: "contracts", link: PagePath.Contracts },
];

export const Header: FC = () => {
  const t = useT();
  return (
    <header className={styles.header}>
      <Link className={styles.title} to={PagePath.Homepage}>
        {t`website_name`}
      </Link>
      <Text
        className={styles.subtitle}
        type="tertiary"
        title={t`website_subtitle` as string}
      >
        {t`website_subtitle`}
      </Text>
      <nav className={styles.nav}>
        {navConfig.map((navItem, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              classNames(styles.link, { [styles["active-link"]]: isActive })
            }
            to={navItem.link}
          >
            <span className={styles["link-text"]}>{t(navItem.textKey)}</span>
            <div className={styles["link-cover"]}>
              <span className={styles["link-cover-text"]}>
                {t(navItem.textKey)}
              </span>
            </div>
          </NavLink>
        ))}
      </nav>
      <div className={styles.settings}>
        <WidthButton className={styles["settings-button"]} />
        <ThemeButton className={styles["settings-button"]} />
        <LanguageButton className={styles["settings-button"]} />
      </div>
    </header>
  );
};
