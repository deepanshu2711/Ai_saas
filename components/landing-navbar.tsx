"use client"

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";


export const LandingNavbar = () => {

    const {isSignedIn} = useAuth()


    return ( 
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href={"/"} className="flex items-center">
                <div  className="relative h-8 w-8 mr-4">
                    <Image
                    src={"/logo.png"}
                    fill
                    alt="Logo"    
                    />
                </div>
                <h1 className="text-2xl font-bold text-white">Genius</h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn?"/dashboard":"/sign-in"} >
                    <Button variant={"outline"} className="rounded-lg" >
                        Get Strated
                    </Button>
                </Link>

            </div>
        </nav>
     );
}
 
export default LandingNavbar;