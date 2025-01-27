import { AboutUs } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetAboutUs = () =>
  useQuery<AboutUs>({
    queryKey: ["about-us"],
    queryFn: () => axios.get<AboutUs>("/api/about-us").then((res) => res.data),
  });
