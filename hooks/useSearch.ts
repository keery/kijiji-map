import { useQuery, UseQueryOptions } from "react-query";
import { client } from "~api/api";
import { SearchOptions, SearchParameters } from "kijiji-scraper";

export const useSearch = (
  params?: SearchParameters,
  searchOptions?: SearchOptions,
  queryOptions?: UseQueryOptions
) => {
  return useQuery(
    ["search", params],
    () => client.post("/api/search", { test: "coucu" }),

    queryOptions
  );
};
