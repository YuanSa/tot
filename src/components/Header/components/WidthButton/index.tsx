import { Dropdown } from "@douyinfe/semi-ui";
import classNames from "classnames";
import { FC } from "react";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { useT } from "../../../../utils/language";
import { supportedWidth } from "../../../WidthProvider";
import { Width, useWidth } from "../../../WidthProvider";
import styles from "./styles.module.scss";

const mapWidthToName: Record<Width, string> = {
  narrow: "narrow_width",
  normal: "normal_width",
  wide: "wide_width",
  maximum: "maximum_width",
};

export interface WidthButtonProps {
  className?: string;
}
export const WidthButton: FC<WidthButtonProps> = ({ className }) => {
  const { width, setWidth } = useWidth();
  const t = useT();

  return (
    <Dropdown
      showTick
      position="bottomRight"
      trigger="click"
      render={
        <Dropdown.Menu>
          <Dropdown.Title>{t`main_width`}</Dropdown.Title>
          {supportedWidth.map((itemWidthCode) => (
            <Dropdown.Item
              active={width === itemWidthCode}
              key={itemWidthCode}
              onClick={() => setWidth(itemWidthCode)}
            >
              {t(mapWidthToName[itemWidthCode])}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      }
    >
      <div className={classNames(styles.wrapper, className)}>
        <AiOutlineColumnWidth />
      </div>
    </Dropdown>
  );
};
