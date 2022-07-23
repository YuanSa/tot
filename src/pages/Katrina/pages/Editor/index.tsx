import { Button, Collapse, Form, TabPane, Tabs } from "@douyinfe/semi-ui";
import { IconClose, IconPlus, IconMinus } from "@douyinfe/semi-icons";
import { ArrayField, FormApi as FormAPI } from "@douyinfe/semi-ui/lib/es/form";
import { FC, useRef } from "react";
import { Katrina } from "../../types";
import { useT } from "@/utils/language";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { DragDropContext } from "react-beautiful-dnd";

interface PageKatrinaEditorProps {
  initFile: Katrina;
  onClose?: () => unknown;
}
export const PageKatrinaEditor: FC<PageKatrinaEditorProps> = ({
  initFile,
  onClose,
}) => {
  const t = useT();
  const formAPI = useRef<FormAPI>();
  return (
    <main className={styles.page}>
      <Form
        className={styles.form}
        initValues={initFile}
        getFormApi={(newFormAPI) => (formAPI.current = newFormAPI)}
      >
        <ArrayField field="contents">
          {({ add: addLang, arrayFields: arrayFieldsLang }) => (
            <Tabs
              type="button"
              tabBarExtraContent={
                <Button
                  className={styles["lang-add"]}
                  icon={<IconPlus />}
                  onClick={addLang}
                >{t`add_lang`}</Button>
              }
            >
              {arrayFieldsLang.map((fieldLang) => (
                <TabPane
                  itemKey={fieldLang.key}
                  tab={
                    <Form.Input
                      className={styles["lang-input"]}
                      field={`${fieldLang.field}.lang`}
                      noLabel
                      suffix={
                        <Button
                          className={styles["lang-remove"]}
                          icon={<IconClose />}
                          onClick={fieldLang.remove}
                        />
                      }
                      onClick={(e) => e.stopPropagation()}
                    />
                  }
                >
                  <ArrayField field={`${fieldLang.field}.contents`}>
                    {({ add: addGroup, arrayFields: arrayFieldsGroup }) => (
                      <Tabs
                        type="line"
                        tabPosition="left"
                        tabBarExtraContent={
                          <Button
                            className={styles["group-add"]}
                            icon={<IconPlus />}
                            onClick={addGroup}
                          >{t`add_group`}</Button>
                        }
                      >
                        {arrayFieldsGroup.map((fieldGroup) => (
                          <TabPane
                            itemKey={fieldGroup.key}
                            tab={
                              <div className={styles["group-input"]}>
                                <Form.Input
                                  className={classNames(
                                    styles["id-input"],
                                    styles["group-id"]
                                  )}
                                  field={`${fieldGroup.field}.id`}
                                  noLabel
                                  prefix={t`ID`}
                                  placeholder={
                                    t`faq_group_id_description` as string
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                                <Form.Input
                                  className={styles["group-title"]}
                                  field={`${fieldGroup.field}.title`}
                                  placeholder={
                                    t`faq_group_title_description` as string
                                  }
                                  noLabel
                                  suffix={
                                    <Button
                                      className={styles["group-remove"]}
                                      icon={<IconClose />}
                                      onClick={fieldGroup.remove}
                                    />
                                  }
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            }
                          >
                            <ArrayField field={`${fieldGroup.field}.contents`}>
                              {({
                                add: addItem,
                                arrayFields: arrayFieldsItem,
                              }) => (
                                <>
                                  <Collapse
                                    keepDOM
                                    expandIconPosition="left"
                                    expandIcon={<IconPlus />}
                                    collapseIcon={<IconMinus />}
                                  >
                                    <DragDropContext>
                                      {arrayFieldsItem.map((fieldItem) => (
                                        <Collapse.Panel
                                          itemKey={fieldItem.key}
                                          header={
                                            <div
                                              className={styles["item-input"]}
                                            >
                                              <Form.Input
                                                className={classNames(
                                                  styles["id-input"],
                                                  styles["item-id"]
                                                )}
                                                field={`${fieldItem.field}.id`}
                                                placeholder={
                                                  t`faq_id_explanation` as string
                                                }
                                                noLabel
                                                prefix={t`ID`}
                                                onClick={(e) =>
                                                  e.stopPropagation()
                                                }
                                              />
                                              <Form.Input
                                                className={styles["item-title"]}
                                                field={`${fieldItem.field}.title`}
                                                noLabel
                                                placeholder={
                                                  t`faq_item_title` as string
                                                }
                                                suffix={
                                                  <Button
                                                    className={
                                                      styles["item-remove"]
                                                    }
                                                    theme="borderless"
                                                    icon={<IconClose />}
                                                    type="danger"
                                                    onClick={fieldItem.remove}
                                                  />
                                                }
                                                onClick={(e) =>
                                                  e.stopPropagation()
                                                }
                                              />
                                            </div>
                                          }
                                        >
                                          <Form.TextArea
                                            className={styles["item-content"]}
                                            field={`${fieldItem.field}.content`}
                                            noLabel
                                            autosize
                                            rows={1}
                                          />
                                        </Collapse.Panel>
                                      ))}
                                    </DragDropContext>
                                  </Collapse>
                                  <Button
                                    icon={<IconPlus />}
                                    theme="borderless"
                                    onClick={addItem}
                                  >{t`faq_add_item`}</Button>
                                </>
                              )}
                            </ArrayField>
                          </TabPane>
                        ))}
                      </Tabs>
                    )}
                  </ArrayField>
                </TabPane>
              ))}
            </Tabs>
          )}
        </ArrayField>
      </Form>
    </main>
  );
};
