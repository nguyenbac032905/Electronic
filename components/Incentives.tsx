import { incentives } from "@/lib/utils";
import Image from "next/image";

const Incentives = () => {
    return (
        <div>
            <h2 className="text-3xl text-center py-5">Best Customer Benefit</h2>
            <div className="mx-auto max-w-screen-2xl py-10 sm-px-2 lg-px-4">
                <div className="mx-auto max-w-2xl grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none">
                    {incentives.map(item => (
                        <div key={item.name} className="text-center lg:block lg:text-center sm:flex sm:text-left">
                            <div className="sm:flex-shrink-0">
                                <div className="flow-root">
                                    <Image width={48} height={48} className="mx-auto" src={item.imageSrc} alt={item.name} />
                                </div>
                            </div>
                            <div className="mt-3 lg-ml-0 lg:mt-3 sm:ml-3 sm:mt-0">
                                <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Incentives;