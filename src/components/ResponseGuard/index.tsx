import { useDateFnsLocaleGuard } from "@/utils/date-fns/useDateFnsLocaleGuard";
import { FC } from "react";
import { useGlobalClassNameResponseGuard } from "../GlobalClassNameProvider";
import { useLanguageResponseGuard } from "../LanguageProvider";
import { useThemeResponseGuard } from "../ThemeProvider";
import { useWidthResponseGuard } from "../WidthProvider";

export const ResponseGuard: FC = () => {
  useLanguageResponseGuard();
  useThemeResponseGuard();
  useWidthResponseGuard();
  useGlobalClassNameResponseGuard();
  useDateFnsLocaleGuard();

  return null;
};
