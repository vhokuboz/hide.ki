"use client";

import dynamic from "next/dynamic";

const CursorGlow = dynamic(() => import("./CursorGlowImpl"), {
  ssr: false,
});

export default CursorGlow;
