"use client"
import {Checkbox, Range} from "@/components";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Filters = () => {
    const {replace} = useRouter();
    const pathName = usePathname();
    const [inputCategory,setInputCategory] = useState<any>({
        box1: {text: "logitech",isChecked: true},
        box2: {text: "bosch",isChecked: true},
        box3: {text: "lenovo",isChecked: true},
        box4: {text: "hp",isChecked: true},
        box5: {text: "samsung",isChecked: true},
        box6: {text: "huawei",isChecked: true},
        box7: {text: "apple",isChecked: true},
        inStock: {text: "instock", isChecked: true},
        outOfStock: {text: "outofstock", isChecked: false},
        priceFilter: {text: "price", value: 3000},
        ratingFilter: {text: "rating", value: 5}
    });
    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams();
            
            // params.set("logitech", inputCategory.box1.isChecked);
            // params.set("womenNewEdition", inputCategory.box2.isChecked);
            // params.set("minRating", inputCategory.ratingFilter.value);
            params.set("rating", inputCategory.ratingFilter.value);
            params.set("price",inputCategory.priceFilter.value);
            replace(`${pathName}?${params}`,{scroll: false});
        }, 100);
        return () => clearTimeout(timeout);
    },[inputCategory]);
    return (
        <div>
            <h3 className="text-2xl mb-2">Filters</h3>
            <div className="divider"></div>
            <div className="flex flex-col gap-y-1">
                <h3 className="text-xl mb-2">Availability</h3>
                <Checkbox text="In stock" itemKey="inStock" stateValue={inputCategory} setStateValue={setInputCategory}/>
                <Checkbox text= "Out of stock" itemKey="outOfStock" stateValue={inputCategory} setStateValue={setInputCategory}/>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col gap-y-1">
                <h3 className="text-xl mb-2">Brand</h3>
                <Checkbox text="Logitech" itemKey="box1" stateValue={inputCategory} setStateValue={setInputCategory}/>
                <Checkbox text="Bosch" itemKey="box2" stateValue={inputCategory} setStateValue={setInputCategory}/>
                <Checkbox text="Lenovo" itemKey="box3" stateValue={inputCategory} setStateValue={setInputCategory}/>
                <Checkbox text="HP" itemKey="box4" stateValue={inputCategory} setStateValue={setInputCategory}/>
                <Checkbox text="SamSung" itemKey="box5" stateValue={inputCategory} setStateValue={setInputCategory}/>
                <Checkbox text="Huawei" itemKey="box6" stateValue={inputCategory} setStateValue={setInputCategory}/>
                <Checkbox text="Apple" itemKey="box7" stateValue={inputCategory} setStateValue={setInputCategory}/>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col gap-y-1">
                <h3 className="text-xl mb-2">Price</h3>
                <Range text="Max price: $" min={0} max={3000} step="10" itemKey="priceFilter" inputCategory={inputCategory} setInputCategory={setInputCategory}/>
            </div>
            <div className="divider"></div>
            <div>
                <h3 className="text-xl mb-2">Minimum Rating</h3>
                <Range min={1} max={5} step="1" itemKey="ratingFilter" marks={[1,2,3,4,5]} inputCategory={inputCategory} setInputCategory={setInputCategory} />
            </div>
        </div>
    )
}
export default Filters;