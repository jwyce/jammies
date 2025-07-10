import { motion } from "motion/react";

export function Waveform() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full text-white/10"
    >
      {[0, 1, 2, 3].map((index) => (
        <motion.circle
          key={index}
          cx="50"
          cy="50"
          r={15 + index * 20}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          animate={{
            r: [15 + index * 20, (15 + index * 20) * 1.4, 15 + index * 20],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 6,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />
      ))}
    </svg>
  );
}
