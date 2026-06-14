import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const dividerLocation = request.url.indexOf("?");
    const queryArray = decodeURIComponent(request.url.substring(dividerLocation+1, request.url.length)).split("&");

    let filterArray = [];

    let sortByValue = "defaultSort";

    for(let i=0; i<queryArray.length; i++){
        const match = queryArray[i].match(/filters\[(.*?)\]\[\$(.*?)\]=(.*)/);
        if (match) {
            const [, filterType, filterOperator, filterValue] = match;
            filterArray.push({filterType,filterOperator,filterValue});
        }
        if(queryArray[i].indexOf("sort") !== -1){
            sortByValue = queryArray[i].substring(queryArray[i].indexOf("=")+1,queryArray[i].length);
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

    let sortByObj = {};
    switch (sortByValue) {
        case "titleAsc":
            sortByObj = {
                title: "asc"
            }
            break;
        case "titleDesc":
            sortByObj = {
                title: "desc"
            }
            break;
        case "lowPrice":
            sortByObj = {
                price: "asc"
            }
            break;
        case "highPrice":
            sortByObj = {
                price: "desc"
            }
            break;
    
        default:
            sortByObj = {}
            break;
    }
    
    const products = await prisma.product.findMany({
        where: filterObj,
        orderBy: sortByObj
    });
    return NextResponse.json(products);
}