"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function QuizLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  const router = useRouter();
  return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed inset-0 z-50 bg-neutral-800"
      >
        <button
          onClick={() => router.push("/")}
          className="absolute top-8 left-4 z-50 text-white hover:opacity-70 transition"
        >
          <XMarkIcon className="w-10 h-10 stroke-1" />
        </button>

        {children}
      </motion.div>
  );
}