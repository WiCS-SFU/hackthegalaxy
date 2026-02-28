"use client";

import { motion } from "framer-motion";

export default function QuizLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed inset-0 z-50 bg-neutral-800"
      >
        {children}
      </motion.div>
  );
}