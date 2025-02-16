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
import { useGetSports } from "@/hooks/programs/useSports";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex, TextArea } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { z } from "zod";

const FormSchema = z.object({
  title: z.string().min(1, "Title is required."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(10000, "Description is too long."),
});

export default function EditSports() {
  const { data: sports, isLoading } = useGetSports();
  const [isUpdating, setIsUpdating] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    if (sports) {
      form.reset({
        title: sports.title,
        description: sports.description,
      });
    }
  }, [sports, form]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (!sports?.id) {
      toast({ title: "Invalid request", description: "No data to update." });
      return;
    }

    try {
      setIsUpdating(true);
      await axios.put("/api/programs/sports", { ...data, id: sports.id });
      toast({
        title: "Page Updated",
        description: "Your changes have been saved.",
      });
      queryClient.invalidateQueries({ queryKey: ["about-us"] });
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
                  <FormControl>
                    <TextArea
                      rows={10}
                      placeholder="Enter a detailed description"
                      {...field}
                    />
                  </FormControl>
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
