// src/pages/MainPage.tsx
"use client";

import React from "react";
import Header from "@/components/Header";
import LayoutMain from "@/components/Home/LayoutMain";
import Main from "@/components/Home/Main";
import Footer from "@/components/Footer";

interface MainPageProps {
    children?: React.ReactNode; // Haz que children sea opcional
}

const MainPage: React.FC<MainPageProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <LayoutMain />
            <Main />
            {children} {/* Renderiza los children aquí si se pasan */}
            <Footer />
        </div>
    );
};

export default MainPage;
