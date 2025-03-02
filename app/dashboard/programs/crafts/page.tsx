"use client";

import { queryClient } from "@/app/query-client-provider";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGetCrafts } from "@/hooks/programs/useCrafts";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex } from "@radix-ui/themes";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { z } from "zod";

// Dynamically import MDEditor to prevent SSR issues
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const FormSchema = z.object({
  title: z.string().min(1, "Title is required."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(10000, "Description is too long."),
});

export default function EditCrafts() {
  const { data: crafts, isLoading } = useGetCrafts();
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (crafts) {
      form.reset({
        title: crafts.title,
        description: crafts.description,
      });
    }
  }, [crafts, form]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (!crafts?.id) {
      toast({ title: "Invalid request", description: "No data to update." });
      return;
    }

    try {
      setIsUpdating(true);
      await axios.put("/api/programs/crafts", { ...data, id: crafts.id });
      toast({
        title: "Page Updated",
        description: "Your changes have been saved.",
      });
      queryClient.invalidateQueries({ queryKey: ["crafts"] });
      router.refresh();
      setIsUpdating(false);
    } catch {
      toast({
        title: "Failed to update",
        description: "Please try again later.",
      });
      setIsUpdating(false);
    }
  };

  if (isLoading) {
    return (
      <Flex align="center" justify="center" className="py-[100px]">
        <p>Loading...</p>
      </Flex>
    );
  }

  return (
    <Flex align="center" justify="center" className="px-3">
      <div className="w-full rounded-2xl shadow-xl border py-4 px-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <MDEditor
                    value={field.value}
                    onChange={field.onChange}
                    height={400}
                    preview="edit"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isUpdating} type="submit">
              {isUpdating ? <BeatLoader /> : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </Flex>
  );
}
