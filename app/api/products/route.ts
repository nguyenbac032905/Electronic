import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import schema from "@/utils/schema";

export async function GET(request: NextRequest) {
    const dividerLocation = request.url.indexOf("?");
    const queryArray = decodeURIComponent(request.url.substring(dividerLocation+1, request.url.length)).split("&");
    let filterArray = [];
    for(let i=0; i<queryArray.length; i++){
        // if(queryArray[i].indexOf("price") !== -1){
        //     filterType = queryArray[i].substring(queryArray[i].indexOf("price"), queryArray[i].indexOf("price") + "price".length);

        //     const filterOperator = queryArray[i].substring(queryArray[i].indexOf("$")+1,queryArray[i].indexOf("$")+4);

        //     const filterValue = queryArray[i].substring(queryArray[i].indexOf("=")+1, queryArray[i].length);

        //     filterArray.push(filterType,filterOperator,filterValue);
        // }
        //su dung regex
        const match = queryArray[i].match(/filters\[(.*?)\]\[\$(.*?)\]=(.*)/);
        if (match) {
            const [, filterType, filterOperator, filterValue] = match;
            filterArray.push({filterType,filterOperator,filterValue});
        }
    }

    let filterObj = {};
    for(let item in filterArray){
        filterObj = {
            ...filterObj,
            [filterArray[item].filterType]: {
                [filterArray[item].filterOperator]: Number(filterArray[item].filterValue)
            }
        }
    }

    const products = await prisma.product.findMany({
        where: filterObj
    });
    return NextResponse.json(products);
}

// export async function POST(request: NextRequest) {
//     const body = await request.json();
//     const newProduct = await prisma.product.create({
//         data: {
//             title: body.title,
//             price: body.price,
//             rating: body.rating,
//             description: body.description,
//             mainImage: body.mainImage
//         }
//     });

//     return NextResponse.json(newProduct,{status: 201})
// }

// export async function POST(request:NextRequest){
//     const body = await request.json();
//   const validation = schema.safeParse(body);

//     if(!validation.success){
//         return NextResponse.json(validation.error.errors, { status: 400 })
//     }

//     const user = await prisma.user.findUnique({
//       where: {email: body.email}
//     })

//     if(user){
//       return NextResponse.json({error: 'User already exists'}, {status: 400})
//     }

//     const newUser = await prisma.user.create({
//       data: {
//         name: body.name,
//         email: body.email
//       }
//     });

//     return NextResponse.json(newUser, {status: 201});
// }