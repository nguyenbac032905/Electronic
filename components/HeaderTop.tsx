import { FaHeadphones, FaLocationDot, FaRegEnvelope, FaRegUser } from "react-icons/fa6";

const HeaderTop = () => {
    return (
        <>
            <div className="h-10 bg-gray-100 px-10 max-md:px-5 max-md:h-16">
                <div className="flex justify-between h-full max-md:flex-col max-md:justify-center max-md:items-center max-w-screen-2xl mx-auto">
                    <ul className="flex gap-x-5 max-[370px]:test-sm max-[370px]:gap-x-2">
                        <li className="flex items-center gap-x-2">
                            <FaHeadphones/>
                            <span>0353263314</span>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <FaRegEnvelope />
                            <span>nguyenbac29305@gmail.com</span>
                        </li>
                    </ul>
                    <ul className="flex gap-x-5 max-[370px]:test-sm max-[370px]:gap-x-2">
                        <li className="flex items-center gap-x-2">
                            <FaLocationDot />
                            <span>Store Location</span>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <FaRegUser />
                            <span>Login</span>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <FaRegUser />
                            <span>Register</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default HeaderTop;