import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const InstructionMessage ="You are a code generator .You must answer only in markdown code snippets.Use code comments for explanation"


export async function POST(req: Request) {
    try {
        const {userId} = auth();
        const body = await req.json();
        const {content} = body;
        if(!userId){
            return new NextResponse("Unauthorized" ,{status:401});
        }
        if(!openai){
            return new NextResponse("Open Ai api key not Configured" ,{status:500});
        }

        if(!content){
            return new NextResponse("Messages are required",{status:400});
        }
        
        const responce = await openai.chat.completions.create({
            messages: [{ role: "system", content: InstructionMessage  + content }],
            model: 'gpt-3.5-turbo'
        });

        return NextResponse.json(responce.choices[0].message);

    } catch (error) {
        console.log("code error",error);
        return new NextResponse("Internal Error" ,{status:500})
    }
}