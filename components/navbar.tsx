import { Ghost, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./Mobile-Sidebar";


const Navbar = () => {
    return ( 
        <div className="flex items-center p-4 ">
            <MobileSidebar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
     );
}
 
export default Navbar;
