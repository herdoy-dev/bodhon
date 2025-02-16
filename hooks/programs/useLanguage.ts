import { Language } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetLanguage = () =>
  useQuery<Language>({
    queryKey: ["language"],
    queryFn: () =>
      axios.get<Language>("/api/programs/language").then((res) => res.data),
  });
