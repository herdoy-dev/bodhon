import { Box, Skeleton } from "@radix-ui/themes";

export default function Sidebar() {
  return (
    <Box className="px-3 space-y-10">
      <div className="w-full space-y-4">
        <Skeleton className="w-full h-[200px]" />
        <Skeleton className="w-full h-[20px]" />
        <Skeleton className="w-[50%] h-[20px]" />
      </div>
      <div className="w-full space-y-4">
        <Skeleton className="w-full h-[200px]" />
        <Skeleton className="w-full h-[20px]" />
        <Skeleton className="w-[50%] h-[20px]" />
      </div>
    </Box>
  );
}
