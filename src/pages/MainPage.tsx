"use client";
import React, { useState, useLayoutEffect } from "react";
import Header from "@/components/Header";
import LayoutMain from "@/components/Home/LayoutMain";
import Main from "@/components/Home/Main";
import Footer from "@/components/Footer";

export default function MainPage({
  children,
}: {
  children: React.ReactNode;
}) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const pathname = usePathname();

//   const publicRoutes = [
//     "/auth-page/signin",
//     "/auth-page/signup",
//     "/verify-email",
//     "/reset-password",
//   ];

//   useLayoutEffect(() => {
//       // if (status === "unauthenticated" && !publicRoutes.includes(pathname)) {
//       //   router.push("/auth-page/signin");
//       // }
//   }, [status, router, pathname]);

  return (
    <div>
        <Header />
        <LayoutMain />
        <Main />
        <Footer />
    </div>
  );
}
