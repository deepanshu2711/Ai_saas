import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
    return ( 
        <div>
            <Heading title="Conversation" description="our most advanced conversation model"
            icon={MessageSquare} iconColor="text-violet-500" bgColor="bg-violet-500/10"
            />

            <div className="p-2">
                <form className="w-full flex flex-col md:flex-row gap-4 items-center border p-8 rounded-lg">
                    <input className="w-full  p-3 rounded-lg border-b-2 focus-within:outline-none hover:shadow-md focus-within:shadow-md" 
                    type="text" placeholder="how can I find the area of circle ?"/>
                    <Button className="p-3 w-full md:w-auto uppercase" >Generate</Button>
                </form>
            </div>
            <div className="space-y-4 mt-4 px-4 lg:px-8 ">
                Messages Content
            </div>
        </div>
     );
}
 
export default ConversationPage;