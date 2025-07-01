import type React from "react";
import IndexView from "./src/view/IndexView";
import MainLayout from "./src/layouts/MainLayout";

export default function Portfolio() {
  return (
    <MainLayout>
      <IndexView />
    </MainLayout>
  );
}
