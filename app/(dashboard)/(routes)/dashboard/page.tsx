"use client"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { ArrowRight, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react"

const tools =[
  {
    lable:"Conversation",
    icon:MessageSquare,
    color:"text-violet-500",
    bgColor:"bg-violet-500/10",
    href:"/conversation"
  },
  
  {
    lable:"Image generation",
    icon:ImageIcon,
    color:"text-pink-700",
    bgColor:"bg-pink-700/10",
    href:"/image"
  },
  
  {
    lable:"Code Generation",
    icon:CodeIcon,
    color:"text-green-500",
    bgColor:"bg-green-500/10",
    href:"/code"
  },
]


export default function Dashboard() {
  
const router = useRouter()
  return (
    <div>
     <div className="mb-8 space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Explore the power of AI
      </h2>
      <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Chat with the smartest AI-Explore the power of AI
      </p>
     </div>
     <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) =>(
            <Card onClick={()=>router.push(tool.href)} key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md
            transition cursor-pointer
            "
            >
              <div className="flex items-center gap-x-4">
                <div className={`p-2 w-fit rounded-md ${tool.bgColor}`}>
                    <tool.icon className={`w-8 h-8 ${tool.color}`} />
                </div>
                <div className="font-semibold">
                    {tool.lable}
                </div>

              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
     </div>
    </div>
  )
}
