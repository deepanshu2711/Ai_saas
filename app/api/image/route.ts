import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})



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
        
        const responce = await openai.images.generate(
            {
                model:"dall-e-2",
                prompt:content,
                size:"512x512",
                quality:"standard",
                n:4

            }
        );

        return NextResponse.json(responce.data);

    } catch (error) {
        console.log("Image error",error);
        return new NextResponse("Internal Error" ,{status:500})
    }
}