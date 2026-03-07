"use client";

import { Suspense } from "react";
import DetailsContent from "./DetailsContent";

export default function Details() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailsContent />
    </Suspense>
  );
}