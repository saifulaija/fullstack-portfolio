import useLinks from "./constant";

export function useGetLinks() {
  return useLinks();
}

export type SectionName = ReturnType<typeof useGetLinks>[number]["name"];
