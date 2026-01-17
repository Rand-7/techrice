"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <motion.div
        className="w-20 h-20 rounded-full border-4"
        animate={{
          borderTopColor: ["#00C0ED", "#FDD308", "#00C0ED"],
          borderRightColor: ["#FDD308", "#00C0ED", "#FDD308"],
          borderBottomColor: ["#00C0ED", "#FDD308", "#00C0ED"],
          borderLeftColor: ["#FDD308", "#00C0ED", "#FDD308"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
