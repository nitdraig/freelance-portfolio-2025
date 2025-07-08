"use client";
import { LanguageProvider } from "@/app/src/contexts/LanguageContext";
import MainLayout from "@/app/src/layouts/MainLayout";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <MainLayout>{children}</MainLayout>
    </LanguageProvider>
  );
}
