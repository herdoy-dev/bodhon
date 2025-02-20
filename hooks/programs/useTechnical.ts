import { Technical } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetTechnical = () =>
  useQuery<Technical>({
    queryKey: ["technical"],
    queryFn: () =>
      axios.get<Technical>("/api/programs/technical").then((res) => res.data),
  });
