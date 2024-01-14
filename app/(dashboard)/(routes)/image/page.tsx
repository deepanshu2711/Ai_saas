"use client"
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Download, ImageIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Empty } from "@/components/empty";
import { useRouter } from "next/navigation";

const ImagePage = () => {
    const[content,setcontent] =useState("");
    const[resImages,setresImages] =useState<any>([]);
    const[generating,setgenerating] =useState(false);
    const router = useRouter()

    const handleSubmit =async(e:React.FormEvent)=>{
        e.preventDefault()
        try {
            setgenerating(true)
            if(!content){
                return;
            }
            const responce = await fetch("/api/image",{
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
            setresImages((prev:any) =>[...prev,data]);
            setgenerating(false)
        } catch (error) {
            console.log(error);
            setgenerating(false)
        }
    }

    const allUrls = resImages.flatMap((innerArray :any) => innerArray.map((item:any) => item.url));
    

   
    

    return ( 
        
        <div>
            <Heading title="Image Generation" description="our most advanced image generation model"
            icon={ImageIcon} iconColor="text-pink-700" bgColor="bg-pink-700/10"
            />

            <div className="p-2">
                <p className="text-center text-muted-foreground text-sm">Wait one minutes after generating three images </p>
                <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row gap-4 items-center border p-8 rounded-lg">
                    <input onChange={(e)=>setcontent(e.target.value)} id="prompt"  className="w-full  p-3 rounded-lg border-b-2 focus-within:outline-none hover:shadow-md focus-within:shadow-md" 
                    type="text" placeholder="how can I find the area of circle ?"/>
                    <Button disabled={generating} className="p-3 w-full  uppercase md:w-40 " >{generating ? <Image className="animate-spin" width={30} height={30} src={"/logo.png"} alt="searching"/>: "Generate"}</Button>
                </form>
            </div>
            <div className="space-y-4 mt-4 px-4 lg:px-8 ">
                {allUrls.length ===0 && !generating && (
                    <Empty lable="No conversation Started" />
                )}
                <div className=" flex flex-col items-center justify-start  md:flex-row md:gap-5 flex-wrap   gap-y-4">
                    {allUrls.map((image:any) =>(
                        <div key={image} className="w-60 h-60 mr-4 ml-4 mb-14">
                            <img className="rounded-lg hover:shadow-lg transition-transform hover:scale-105 duration-300" src={image} alt={`generated image ${image}`} />
                            <Button onClick={()=>window.open(image)} variant={"secondary"} className="w-60 h-12 flex gap-20 items-center p-2 hover:shadow-lg">
                            <Download />
                            <p className="text-lg rounded-lg">Download</p>
                            </Button>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default ImagePage;