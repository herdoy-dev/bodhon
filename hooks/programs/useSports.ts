import { Sports } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetSports = () =>
  useQuery<Sports>({
    queryKey: ["sports"],
    queryFn: () =>
      axios.get<Sports>("/api/programs/sports").then((res) => res.data),
    staleTime: 0, 
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
