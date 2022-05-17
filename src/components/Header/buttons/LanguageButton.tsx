import { Dropdown } from "antd";
import type { FC } from "react";
import {
  LanguageCode,
  useLanguage,
  supportedLanguage,
} from "../../../contexts/Language";
import { useT } from "../../../utils/languages/useT";
import { Button } from "antd";
import { IconLanguage } from "../../Icon";

const mapLanguageCodeToName: Record<LanguageCode, string> = {
  "en-US": "English",
  "zh-CN": "中文",
};

export const LanguageButton: FC = () => {
  const { language, setLanguage, isFollowingSystemLanguage, isLoading } =
    useLanguage();
  const t = useT();

  return (
    <Dropdown
      trigger={["click"]}
      placement="bottomRight"
      destroyPopupOnHide
      menu={{
        items: [
          {
            key: "",
            label: t("follow_system"),
          },
          { type: "divider" },
          ...supportedLanguage.map((itemLanguageCode) => ({
            key: itemLanguageCode,
            label: mapLanguageCodeToName[itemLanguageCode],
          })),
        ],
        selectable: true,
        selectedKeys: [isFollowingSystemLanguage ? "" : language],
        onSelect: ({ key }) =>
          setLanguage((key as LanguageCode | "") || undefined),
      }}
    >
      <Button
        type="text"
        loading={isLoading}
        icon={<IconLanguage />}
        title="Language"
      >
        {/* {mapLanguageCodeToName[language]} */}
      </Button>
    </Dropdown>
  );
};
