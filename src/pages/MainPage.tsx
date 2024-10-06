"use client";

import React from "react";
import Header from "@/components/Header";
import LayoutMain from "@/components/Home/LayoutMain";
import Main from "@/components/Home/Main";
import Footer from "@/components/Footer";

export default function MainPage() {
  return (
    <div>
      <Header />
      <LayoutMain />
      <Main />
      <Footer />
    </div>
  );
}
