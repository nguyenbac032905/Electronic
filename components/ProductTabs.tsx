"use client"
import { useState } from "react";
import {RatingPercentElement, SingleReview} from "@/components";

const ProductTabs = () => {
    const [currentProductTab, setCurrentProductTab] = useState<number>(0);
    return (
        <div className="px-5">
            <div className="tabs tabs-border w-full">
                <a className={`grow tab ${currentProductTab===0 && "tab-active"} text-lg pb-8 max-[500px]:text-base max-[400px]:text-sm`} onClick={() => setCurrentProductTab(0)}>
                    Description
                </a>
                <a className={`grow tab ${currentProductTab===1 && "tab-active"} text-lg pb-8 max-[500px]:text-base max-[400px]:text-sm`} onClick={() => setCurrentProductTab(1)}>
                    Additional info
                </a>
                <a className={`grow tab ${currentProductTab===2 && "tab-active"} text-lg pb-8 max-[500px]:text-base max-[400px]:text-sm`} onClick={() => setCurrentProductTab(2)}>
                    Reviews
                </a>
            </div>
            <div className="pt-5">
                {currentProductTab === 0 && (
                    <p className="text-lg max-sm:text-base max-sm:text-sm">
                        Desc - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum ad illo recusandae eveniet nulla dignissimos, asperiores
                        vero aliquid nemo ab excepturi dolores? Commodi quas vitae,
                        laboriosam unde distinctio fugiat reprehenderit!
                    </p>
                )}
                {currentProductTab === 1 && (
                    <div className="overflow-x-auto">
                        <table className="table text-xl text-center max-[500px]:text-base">
                            <tbody>
                                <tr>
                                    <th>Vendor:</th>
                                    <td>Lenovo</td>
                                </tr>
                                <tr>
                                    <th>Category:</th>
                                    <td>Laptop</td>
                                </tr>
                                <tr>
                                    <th>Color:</th>
                                    <td>Silver, LightSlateGray, Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {currentProductTab === 2 && (
                    <>
                        <RatingPercentElement />
                        <SingleReview />
                        <SingleReview />
                        <SingleReview />
                        <SingleReview />
                    </>
                )}
            </div>
        </div>
    )
}
export default ProductTabs;