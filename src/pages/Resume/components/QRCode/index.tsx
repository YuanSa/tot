import classNames from "classnames";
import { FC, ReactNode, useMemo } from "react";
import { QRCode as AntdQRCode } from "antd";
import styles from "./styles.module.scss";

export interface ResumeQRCodeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: ReactNode;
}
export const ResumeQRCode: FC<ResumeQRCodeProps> = ({
  text,
  className,
  ...remainsProps
}) => {
  const url = window.location.href;
  const urlWithoutProtocol = useMemo(() => {
    return url.replace(/^https?:\/\//, "");
  }, [url]);

  return (
    <div {...remainsProps} className={classNames(styles.wrapper, className)}>
      <AntdQRCode bordered={false} value={url} size={80} />
      <div className={styles.extra}>
        <div className={styles.text}>{text}</div>
        <div className={styles.value}>{urlWithoutProtocol}</div>
      </div>
    </div>
  );
};
