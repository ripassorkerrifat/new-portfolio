"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Hide header on public projects page (and you can add more routes later)
  const hideHeader = pathname?.startsWith("/projects");

  if (hideHeader) return null;
  return <Header />;
}
