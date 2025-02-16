"use client";
import { useGetLatestPrograms } from "@/hooks/programs/usePrograms";
import { Box } from "@radix-ui/themes";
import ProgramCard from "./program-card";

export default function Sidebar() {
  const { latestPrograms } = useGetLatestPrograms();
  return (
    <Box className="p-4 space-y-10 bg-secondary">
      <h1 className="text-2xl font-semibold mb-6">Our Latest Programs</h1>
      {latestPrograms.map((i) => (
        <ProgramCard
          key={i.id}
          title={i.title || ""}
          image={i.thumbnail}
          caption={i.description || ""}
        />
      ))}
    </Box>
  );
}
