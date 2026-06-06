import { categoryMenuList } from "@/lib/utils";
import Image from "next/image";
import CategoryItem from "./CategoryItem";
const CategoryMenu = () => {
    return (
        <div className="max-w-screen-2xl mx-auto py-10 px-16 gap-5 grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2">
            {categoryMenuList.map(item => (
                <CategoryItem title={item.title} key={item.id}>
                    <Image src={item.src} width={48} height={48} alt={item.title} />
                </CategoryItem>
            ))}
        </div>
    )
}
export default CategoryMenu;