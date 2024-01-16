"use client"

import { Code, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, Settings, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {


    const routes = [
        {
            lable :"Dashboard",
            icon:LayoutDashboard,
            href:"/dashboard",
            color:"text-sky-500"
        },
        {
            lable :"Conversation",
            icon:MessageSquare,
            href:"/conversation",
            color:"text-voilet-500"
        },
        {
            lable :"Image Generation",
            icon:ImageIcon,
            href:"/image",
            color:"text-pink-700"
        },
        
        {
            lable :"Code Generation",
            icon:Code,
            href:"/code",
            color:"text-green-700"
        },
        {
            lable :"Settings",
            icon:Settings,
            href:"/settings",
            
        },
    ]

    const pathname = usePathname();


    return ( 
        <div className="space-y-4 py-4 flex flex-col
        bg-[#111827] text-white
        ">
            <div className="p-3 pt-2 flex-1">
                <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill src={"/logo.png"} alt="logo" />
                    </div>
                    <h1 className="font-bold text-2xl">
                        Genius
                    </h1>
                </Link>
                <div className="space-y-1 flex flex-col h-screen">
                    {routes.map((route) =>(
                        <Link href={route.href} key={route.href} className={` ${pathname === route.href ? 
                        "bg-white/10" : ""} text-sm group flex p-3  w-full justify-startfont-medium cursor-pointer hover:text-white
                         hover:bg-white/10 rounded-lg transition `} >
                            <div className="flex items-center flex-1">
                                <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                                {route.lable}
                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </div>
     );
}
 
export default SideBar;