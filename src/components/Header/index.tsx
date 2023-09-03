import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import { PagePath } from "../../constants/PagePath";
import { LanguageButton } from "./buttons/LanguageButton";
import { useT } from "../../utils/languages/useT";
import classNames from "classnames";

const navConfig = [
  // { textKey: "blog", link: PagePath.Blog },
  // { textKey: "portfolio", link: PagePath.Portfolio },
  // { textKey: "service_and_price", link: PagePath.ServiceAndPrice },
  { textKey: "resume", link: PagePath.Resume },
  // { textKey: "playground", link: PagePath.Playground },
  // { textKey: "contact", link: PagePath.Contact },
];

export const Header: FC = () => {
  const t = useT();
  return (
    <header className={classNames(styles.header, "at-least-medium-view")}>
      <Link className={styles.title} to={PagePath.Homepage}>
        {t`website_name`}
      </Link>
      <div className={styles.subtitle} title={t`website_subtitle` as string}>
        {t`website_subtitle`}
      </div>
      <nav className={styles.nav}>
        {navConfig.map((navItem, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              classNames(styles.link, isActive && styles.active)
            }
            to={navItem.link}
          >
            {t(navItem.textKey)}
          </NavLink>
        ))}
      </nav>
      <div>
        <LanguageButton />
      </div>
    </header>
  );
};
