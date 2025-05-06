"use client";

import ComputerAnimation from "../data/computer-lottie.json";
import dynamic from "next/dynamic";
import { MagicButton } from "./ui/magic-button";
import { motion } from "motion/react";

const transition = {
  type: "spring",
  damping: 10,
  stiffness: 30,
  ease: "easeInOut",
};

const infoVariants = {
  initial: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: transition,
  },
};

const lottieVariants = {
  initial: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: transition,
  },
};

export const Hero = () => {
  const Lottie = dynamic(
    () => import("../components/lottie").then((mod) => mod.Lottie),
    {
      ssr: false,
    },
  );
  const lottieOptions = {
    animationData: ComputerAnimation,
  };

  return (
    <div className="mt-20 lg:px-40">
      <div className="flex w-full flex-col-reverse flex-wrap items-center justify-center lg:mt-0 lg:flex-row lg:justify-between">
        <motion.div
          variants={infoVariants}
          initial="initial"
          animate="visible"
          className="flex w-full flex-col gap-1 text-center lg:w-max lg:text-left"
        >
          <p className="text-accent-100 text-md hidden text-left lg:block">
            Hi, my name is
          </p>
          <h1 className="text-4xl lg:text-7xl">Jack Hotchkiss</h1>
          <h3 className="text-md italic text-stone-400 lg:text-2xl">
            Full Stack Web Developer
          </h3>
          <div className="hidden gap-8 lg:flex">
            <MagicButton variant="accent">See my work</MagicButton>
            <MagicButton>Contact Me</MagicButton>
          </div>
        </motion.div>

        <motion.div
          variants={lottieVariants}
          initial="initial"
          animate="visible"
        >
          <Lottie options={lottieOptions} className="md:w-[600px]" />
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
        <MagicButton variant="accent" className="mt-20">
          See my work
        </MagicButton>
        <MagicButton>Contact Me</MagicButton>
      </div>
    </div>
  );
};
