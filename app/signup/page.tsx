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
import { Container, Flex, Grid, Link } from "@radix-ui/themes";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { z } from "zod";

const FormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export default function SignUP() {
  const [isLoading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { firstName, lastName, email, password } = data;
    setLoading(true);
    axios
      .post("/api/users", {
        name: `${firstName} ${lastName}`,
        email,
        password,
      })
      .then(() => {
        toast({ title: "Sign Up Success!" });
        setLoading(false);
        signIn("credentials", {
          email,
          password,
          callbackUrl: "/",
        });
      })
      .catch(() => {
        toast({ title: "Something went worn!" });
        setLoading(false);
      });
  }

  return (
    <Container className="px-3">
      <Flex align="center" justify="center" className="py-[100px]">
        <div className="w-[500px] rounded-2xl shadow-xl border py-4 px-3">
          <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <Grid columns="2" gap="4" className="w-full">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Grid>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
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
                {isLoading ? <BeatLoader /> : "Submit"}
              </Button>
            </form>
          </Form>
          <div className="mt-5 w-full">
            <p className="text-center">
              Already have an account{" "}
              <Link className="text-primary" href="/login">
                Log In
              </Link>{" "}
            </p>
          </div>
        </div>
      </Flex>
    </Container>
  );
}
