import prisma from "@/utils/db";
import {NextRequest, NextResponse} from "next/server";
export async function GET(request: NextRequest, {params}:{params: {productID: string}}){
    const {productID} = await params;

    const images = await prisma.image.findMany({
        where: {productID: productID}
    });

    if(!images){
        return NextResponse.json({error: "Images not found"}, {status: 400});
    }

    return NextResponse.json(images);
}