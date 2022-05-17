export const withDefaultLocale = <T = any>(originalOptions: T) => {
  if (typeof originalOptions === "object" || originalOptions === undefined) {
    return { locale: window.dateFnsLocal, ...originalOptions };
  } else {
    return originalOptions;
  }
};
