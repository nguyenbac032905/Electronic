import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {nanoid} from "nanoid";

export const POST = async (request: NextRequest) => {
    const {email, password} = await request.json();

    const existingUser = await prisma.user.findFirst({where: {email}});

    if(existingUser){
        return new NextResponse("Email is already in use",{status: 400});
    }

    const hashedPassword = await bcrypt.hash(password,5);

    try{
        await prisma.user.create({
            data: {
                id: nanoid() + "",
                email,
                password: hashedPassword
            }
        })
        return new NextResponse("User is regestered", {status: 200});
    }catch(error: any){
        return new NextResponse(error,{status: 500});
    }
}