import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden relative">
            {isSidebarOpen && <div className="fixed inset-0 bg-black/75 z-30 md:hidden 
            transition-opacity duration-300 ease-in-out" onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-hidden="true" />}


            {/* {} */}
            <SideBar isSidebarOpen = {isSidebarOpen} setIsSidebar={setIsSidebarOpen}>.</SideBar>
            {/* {} */}

            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden h-6 mt-2 w-6 bg-gray-100"
             aria-label="toggle menu">
                <Bars3Icon className="h-6 w-6 text-gray-500" />
            </button>
            <div className="flex-1 bg-gray-100">
                <main className="p-2 sm:p-4 md:p-5 w-full">
                    <Header/>
                    {children}
                </main>
            </div>
            {/* Right SideBar */}
            <div className="w-full md:w-[25%] md:block mt-6 md:mt-0">
                <RightSideBar />
            </div>
        </div>
    )
}

export default Layout