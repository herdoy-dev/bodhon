import { Crafts } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCrafts = () =>
  useQuery<Crafts>({
    queryKey: ["crafts"],
    queryFn: () =>
      axios.get<Crafts>("/api/programs/crafts").then((res) => res.data),
  });
