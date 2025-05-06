import { HTMLMotionProps, motion } from "motion/react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  position?: string;
  className?: string;
  variant?: "default" | "accent";
}

export const MagicButton = ({
  children,
  icon,
  position,
  className,
  variant = "default",
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ y: -5 }}
      className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:mt-10 md:w-60 ${className}`}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`${variant === "default" ? "bg-slate-950" : "bg-white-950"} text-md inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-7 font-medium text-white backdrop-blur-3xl`}
      >
        {position === "left" && icon}
        {children}
        {position === "right" && icon}
      </span>
    </motion.button>
  );
};
