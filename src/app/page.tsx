"use client";

import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col gap-3 p-5">
      <Navbar />
      <Hero />
    </main>
  );
}
