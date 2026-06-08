import { FaStar } from "react-icons/fa6";

const RatingPercentElement = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-x-[1px] mb-2">
                <FaStar className="text-custom-yellow text-2xl"/>
                <FaStar className="text-custom-yellow text-2xl"/>
                <FaStar className="text-custom-yellow text-2xl"/>
                <FaStar className="text-custom-yellow text-2xl"/>
                <FaStar className="text-custom-yellow text-2xl"/>
                <p className="ml-1 text-xl font-medium dark:text-gray-400">4.95</p>
                <p className="ml-1 text-xl font-medium dark:text-gray-400">out of</p>
                <p className="ml-1 text-xl font-medium dark:text-gray-400">5</p>
            </div>
            <p className="text-lg font-medium text-center dark:text-gray-400">
                1,745 global ratings
            </p>
            <div className="flex items-center justify-center mt-4">
                <a href="#" className="text-base font-medium dark:text-blue-500 hover:underline">
                    5 star
                </a>
                <div className="w-[50%] h-5 mx-4 bg-gray-200 rounded">
                    <div className="h-5 bg-custom-yellow rounded w-[70%]"></div>
                </div>
                <span className="text-base font-medium dark:text-gray-400">70%</span>
            </div>
            <div className="flex items-center justify-center mt-4">
                <a href="#" className="text-base font-medium dark:text-blue-500 hover:underline">
                    4 star
                </a>
                <div className="w-[50%] h-5 mx-4 bg-gray-200 rounded">
                    <div className="h-5 bg-custom-yellow rounded w-[17%]"></div>
                </div>
                <span className="text-base font-medium dark:text-gray-400">17%</span>
            </div>
            <div className="flex items-center justify-center mt-4">
                <a href="#" className="text-base font-medium dark:text-blue-500 hover:underline">
                    3 star
                </a>
                <div className="w-[50%] h-5 mx-4 bg-gray-200 rounded">
                    <div className="h-5 bg-custom-yellow rounded w-[8%]"></div>
                </div>
                <span className="text-base font-medium dark:text-gray-400">8%</span>
            </div>
            <div className="flex items-center justify-center mt-4">
                <a href="#" className="text-base font-medium dark:text-blue-500 hover:underline">
                    2 star
                </a>
                <div className="w-[50%] h-5 mx-4 bg-gray-200 rounded">
                    <div className="h-5 bg-custom-yellow rounded w-[4%]"></div>
                </div>
                <span className="text-base font-medium dark:text-gray-400">4%</span>
            </div>
            <div className="flex items-center justify-center mt-4">
                <a href="#" className="text-base font-medium dark:text-blue-500 hover:underline">
                    1 star
                </a>
                <div className="w-[50%] h-5 mx-4 bg-gray-200 rounded">
                    <div className="h-5 bg-custom-yellow rounded w-[1%]"></div>
                </div>
                <span className="text-base font-medium dark:text-gray-400">1%</span>
            </div>
        </div>
    )
}
export default RatingPercentElement;