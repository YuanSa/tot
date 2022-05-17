import { BiMap } from "@/class/BiMap";
import { Dropdown, Slider } from "@douyinfe/semi-ui";
import classNames from "classnames";
import { FC, useMemo } from "react";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { useT } from "../../../../utils/language";
import { Width, useWidth } from "../../../WidthProvider";
import styles from "./styles.module.scss";

const mapWidthToName: Record<Width, string> = {
  narrow: "narrow_width",
  normal: "normal_width",
  wide: "wide_width",
  maximum: "maximum_width",
};

const biMapWidthToValue = new BiMap<Width, number>([
  ["narrow", 1],
  ["normal", 2],
  ["wide", 3],
  ["maximum", 4],
]);

export interface WidthButtonProps {
  className?: string;
}
export const WidthButton: FC<WidthButtonProps> = ({ className }) => {
  const { width, setWidth } = useWidth();
  const value = useMemo(
    () => biMapWidthToValue.autoGet(width) as number,
    [width]
  );

  const t = useT();
  return (
    <Dropdown
      showTick
      position="bottomRight"
      trigger="click"
      render={
        <Slider
          value={value}
          onChange={(newValue) =>
            setWidth(
              (biMapWidthToValue.autoGet(newValue as number) ??
                "normal") as Width
            )
          }
          min={1}
          max={4}
          step={1}
          marks={biMapWidthToValue.getObjectBackward()}
          style={{ width: 200, height:500 }}
        />
      }
    >
      <div className={classNames(styles.wrapper, className)}>
        <AiOutlineColumnWidth />
      </div>
    </Dropdown>
  );
};
