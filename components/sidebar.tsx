import { Box } from "@radix-ui/themes";
import ProgramCard from "./program-card";

export default function Sidebar() {
  return (
    <Box className="p-4 space-y-10 bg-secondary">
      <h1 className="text-2xl font-semibold mb-6">Our Latest Programs</h1>
      <ProgramCard
        title="Bodhon Language Club"
        image="/language.jpg"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <ProgramCard
        title="Bodhon Sports Club"
        image="/sports.jpg"
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </Box>
  );
}
