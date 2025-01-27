"use client";

import { useGetAboutUs } from "@/hooks/about-us";

export default function AboutUs() {
  const { data } = useGetAboutUs();
  if (!data) return <p>Loading...</p>;
  return (
    <section className="mb-10">
      <h1 className="text-3xl mb-5 font-semibold"> {data.title} </h1>
      <p className="mb-5">{data.description}</p>
    </section>
  );
}
