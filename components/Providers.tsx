"use client";

import { ThemeProvider } from "next-themes";
import ToasterContext from "@/app/context/ToastContext";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      enableSystem={false}
      attribute="class"
      defaultTheme="light"
    >
      <ToasterContext />
      {children}
    </ThemeProvider>
  );
}