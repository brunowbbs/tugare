import { useQuery } from "@tanstack/react-query";
import { getContent } from "../services/api";
import { ContentType } from "./types";

export default function useFetch() {
  const { data, isFetching, error } = useQuery<ContentType>(
    ["@content"],
    getContent,
    {
      refetchOnWindowFocus: false,
    }
  );

  return {
    data,
    isFetching,
    error,
  };
}
