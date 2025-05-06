"use client";

import { useEffect, useState } from "react";
import LottieReact from "react-lottie";

interface LottieProps {
  options: any;
  className?: string;
  width?: number;
  height?: number;
}

export const Lottie = ({ options, className, width, height }: LottieProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className={className}>
      {isClient && (
        <LottieReact options={options} width={width} height={height} />
      )}
    </div>
  );
};
