import React from "react";
import { Link } from "react-router-dom";
import { BanknotesIcon, ChatBubbleLeftIcon, ClockIcon, Cog6ToothIcon, HomeIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/16/solid";
interface SidebarProps {
    isSidebarOpen?: boolean;
    setIsSidebar: any;
    children: React.ReactNode;
}

const SideBar = ({ isSidebarOpen, setIsSidebar }: SidebarProps) => {
    return (
        <div className={`h-screen bg-white py-6 px-4  flex-col justify-between fixed md:static z-40 transition-all
        duration-300 ease-in-out md:w-64 w-[60%] ${isSidebarOpen ? 'left-0' : '-left-64'} md:left-0 shadow-sm`}>

            <button onClick={() => setIsSidebar(false)}
                className="absolute top-4 right-4 md:hidden"
                aria-label="close sidebar">
                <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>
            <div>
                <div className="mb-10 px-2">
                    <h1 className="text-2xl font-bold">Freshly
                        <span className="text-primary text-2xl">.</span>
                    </h1>
                </div>
                <nav className="space-y-6">
                    <Link to="/" className="flex items-center gap-3 text-gray-500 hover:text-primary">
                        <HomeIcon className="h-6 w-6" />
                        <span>Dashboard</span>
                    </Link>
                    <Link to="/restaurants" className="flex items-center gap-3 text-gray-500 hover:text-primary">
                        <BanknotesIcon className="h-6 w-6" />
                        <span>restaurants</span>
                    </Link>
                    <Link to="/messages" className="flex items-center gap-3 text-gray-500 hover:text-primary">
                        <ChatBubbleOvalLeftIcon className="h-6 w-6" />
                        <span>Messages</span>
                    </Link>
                    <Link to="/history" className="flex items-center gap-3 text-gray-500 hover:text-primary">
                        <ClockIcon className="h-6 w-6" />
                        <span>Order History</span>
                    </Link>
                    <Link to="/bills" className="flex items-center gap-3 text-gray-500 hover:text-primary">
                        <BanknotesIcon className="h-6 w-6" />
                        <span>Bills</span>
                    </Link>
                    <Link to="/bills" className="flex items-center gap-3 text-gray-500 hover:text-primary">
                        <Cog6ToothIcon className="h-6 w-6" />
                        <span>Setting</span>
                    </Link>
                </nav>
                <div>
                    <div className="mt-6 absolute bottom-10 w-54 bg-amber-50 p-4 rounded-lg">
                        <h3 className="text-sm font-semibold">Upgrade your Account to Get Free Voucher</h3>
                        <button className="mt-3 bg-white text-sm py-2 px-4 rounded-md hover:bg-amber-300">Upgrade</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar