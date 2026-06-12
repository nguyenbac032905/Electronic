"use client"
import { CustomButton } from "@/components";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const {data: session, status: sessionStatus} = useSession();
    useEffect(() => {
        if(sessionStatus === "authenticated"){
            router.replace("/");
        }
    },[sessionStatus,router])

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if(!isValidEmail(email)){
            toast.error("Email is invalid");
            setError("Email is invalid");
            return;
        }

        if(!password || password.length < 8){
            setError("Password is invalid");
            toast.error("Password is invalid");
            return;
        }

        const res = await signIn("credentials",{
            redirect: false,
            email,
            password
        });

        if(res?.error){
            setError("Invalid email or password");
            toast.error("Invalid email or password");
            return;
        }else{
            setError("");
            toast.success("Successful login");
            router.push("/");
        }
    }

    if(sessionStatus === "loading"){
        return <h1>loading...</h1>
    }
    return(
        <div className="flex flex-col min-h-full flex-1 justify-center py-12 lg:px-8 sm:px-6">
            <div className="flex flex-col items-center justify-center">
                <h2 className="mt-6 text-center text-2xl text-gray-900">Sign in to your account</h2>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-[480px] bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <div className="mt-2">
                            <input type="email" name="email" id="email" placeholder="Email..." required className="block w-full rounded-md py-1.5 px-2 border-0 focus:outline-none focus:border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <div className="mt-2">
                            <input type="password" name="password" id="password" placeholder="Password..." required className="block w-full rounded-md py-1.5 px-2 border-0 focus:outline-none focus:border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" type="checkbox" className="w-4 h-4 rounded border-gray-300 focus:ring-black"/>
                            <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-900">Remember me</label>
                        </div>
                        <div>
                            <a href="#" className="font-semibold">Forgot password?</a>
                        </div>
                    </div>
                    <div>
                        <CustomButton text="Sign In" paddingX={4} paddingY={2} customWidth="full" textSize="base" buttonType="submit"/>
                        <p className="text-red-600 text-center text-[16px] my-4">{error && error}</p>
                    </div>
                    <div>
                        <div className="relative mt-10">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-6 text-gray-900 text-sm font-medium">Or Continue with</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <button type="button" onClick={() => signIn("google")} className="cursor-pointer flex w-full items-center border border-gray-300 justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            <FcGoogle />
                            <span className="text-sm font-semibold leading-6">Google</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => signIn("github")}
                            className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                        >
                            <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm font-semibold leading-6">GitHub</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage;