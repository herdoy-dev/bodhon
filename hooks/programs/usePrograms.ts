"use client";
import { useGetCrafts } from "./useCrafts";
import { useGetLanguage } from "./useLanguage";
import { useGetSports } from "./useSports";
import { useGetTechnical } from "./useTechnical";

export const useGetLatestPrograms = () => {
  const { data: language } = useGetLanguage();
  const { data: technical } = useGetTechnical();
  const { data: crafts } = useGetCrafts();
  const { data: sports } = useGetSports();

  const latestPrograms = [
    {
      id: 1,
      title: language?.title,
      thumbnail: "/language.jpg",
      description: language?.description,
    },
    {
      id: 2,
      title: sports?.title,
      thumbnail: "/sports.jpg",
      description: sports?.description,
    },
    {
      id: 3,
      title: technical?.title,
      thumbnail: "/technical.jpg",
      description: technical?.description,
    },
    {
      id: 4,
      title: crafts?.title,
      thumbnail: "/crafts.jpg",
      description: crafts?.description,
    },
  ];

  return { latestPrograms };
};
