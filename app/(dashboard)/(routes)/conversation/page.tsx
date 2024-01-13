"use client"
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletion, ChatCompletionMessage } from "openai/resources/index.mjs";
import Image from "next/image";
import { Empty } from "@/components/empty";

const ConversationPage = () => {
    const[content,setcontent] =useState("");
    const router = useRouter();
    const[resmessage,setresmessage] =useState<any>([]);
    const[generating,setgenerating] =useState(false);
    

    const handleSubmit =async(e:React.FormEvent)=>{
        e.preventDefault()
        try {
            setgenerating(true)
            if(!content){
                return;
            }
            const responce = await fetch("/api/conversation",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({content})
            })

            if(!responce.ok){
                setgenerating(false);
                return;
            }
    
            const data = await responce.json();
            setresmessage((prev:any) =>[...prev,data]);
            setgenerating(false)
        } catch (error) {
            console.log(error);
            setgenerating(false)
        }
    }

   
    

    return ( 
        
        <div>
            <Heading title="Conversation" description="our most advanced conversation model"
            icon={MessageSquare} iconColor="text-violet-500" bgColor="bg-violet-500/10"
            />

            <div className="p-2">
                <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row gap-4 items-center border p-8 rounded-lg">
                    <input onChange={(e)=>setcontent(e.target.value)} id="prompt"  className="w-full  p-3 rounded-lg border-b-2 focus-within:outline-none hover:shadow-md focus-within:shadow-md" 
                    type="text" placeholder="how can I find the area of circle ?"/>
                    <Button disabled={generating} className="p-3 w-full  uppercase md:w-40 " >{generating ? <Image className="animate-spin" width={30} height={30} src={"/logo.png"} alt="searching"/>: "Generate"}</Button>
                </form>
            </div>
            <div className="space-y-4 mt-4 px-4 lg:px-8 ">
                {resmessage.length ===0 && !generating && (
                    <Empty lable="No conversation Started" />
                )}
                <div className="flex flex-col-reverse gap-y-4">
                {resmessage.map((res:any) =>(
                    <div key={res.id}
                    className={`p-8 w-full flex items-start gap-x-8
                    rounded-lg bg-muted border border-black/10
                    `}
                    >
                        <Image src={"/logo.png"} alt="Genius" width={25} height={25} />
                        {res.content}
                        
                    </div>
                ))}
                </div>
            </div>
        </div>
     );
}
 
export default ConversationPage;