import { useRequest } from "ahooks";
export const useWebsiteConfig = () => {
  const response = useRequest(() =>
    import("../config/website.json").then((res) => res.default)
  );
  return { ...response.data, loading: response.loading };
};
