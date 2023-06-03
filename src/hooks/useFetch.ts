import { useQuery } from "@tanstack/react-query";
import { getContent } from "../services/api";

export default function useFetch() {
  const { data, isFetching, error } = useQuery(["@content"], getContent, {
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isFetching,
    error,
  };
}
