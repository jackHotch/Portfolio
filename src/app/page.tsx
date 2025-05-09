"use client";

import { Hero } from "@/components/hero";
import { Logo } from "@/components/ui/logo";
import { Navbar } from "@/components/navbar";
import { Skills } from "@/components/skills";
import { Resume } from "@/components/ui/resume";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col gap-3 min-h-screen">
      <Logo />
      <Resume />
      <Navbar />
      <Hero />
      <Skills />
    </main>
  );
}
