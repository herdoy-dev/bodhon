"use client";

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
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Flex } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { email, password } = data;
    setLoading(true);
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/issues",
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        setLoading(false);
        toast({ title: "Login Success!" });
        router.push("/");
      }
      if (res?.error) {
        toast({ title: "Invalid username or password" });
        setLoading(false);
      }
    });
  }

  return (
    <Container className="px-3">
      <Flex align="center" justify="center" className="py-[100px]">
        <div className="w-[500px] rounded-2xl shadow-xl border py-4 px-3">
          <h1 className="text-2xl font-semibold text-center">Log In</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isLoading} className="w-full" type="submit">
                {isLoading ? <BeatLoader /> : "Log In"}
              </Button>
            </form>
          </Form>
          <div className="mt-5 w-full">
            <p className="text-center">
              Don&apos;t have any account?{" "}
              <Link className="text-primary" href="/signup">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </Flex>
    </Container>
  );
}
