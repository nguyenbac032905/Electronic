"use client"
import { CustomButton } from "@/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const RegisterPage = () => {
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const {data: session, status: sessionStatus} = useSession();
    useEffect(() => {
        if(sessionStatus === "authenticated"){
            router.replace("/");
        }
    },[session, router]);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmpassword.value;

        if(!isValidEmail(email)){
            setError("Email is invalid");
            toast.error("Email is invalid");
            return;
        }

        if(!password || password.length < 8 ){
            setError("Password is invalid");
            toast.error("Password is invalid");
            return;
        }

        if(confirmPassword !== password) {
            setError("Passwords are not equal");
            toast.error("Passwords are not equal");
            return;
        }
        
        try{
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email,password})
            })
            if(res.status === 400){
                toast.error("This email is alread registered");
                setError("The email already in use");
            }
            if(res.status === 200){
                setError("");
                toast.success("Registration successful");
                router.push("/login");
            }
        }catch(error: any){
            toast.error("Error, try again");
            setError("Error, try again");
        }
    };

    if(sessionStatus === "loading"){
        return <h1>Loading...</h1>;
    }
    return(
        <div className="flex flex-col min-h-full flex-1 justify-center py-12 lg:px-8 sm:px-6">
            <div className="flex flex-col items-center justify-center">
                <h2 className="mt-6 text-center text-2xl text-gray-900">Sign up on our website</h2>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-[480px] bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <div className="mt-2">
                            <input name="name" id="name" placeholder="Name..." required className="block w-full rounded-md py-1.5 px-2 border-0 focus:outline-none focus:border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastname">Lastname:</label>
                        <div className="mt-2">
                            <input name="lastname" id="lastname" placeholder="Lastname..." required className="block w-full rounded-md py-1.5 px-2 border-0 focus:outline-none focus:border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
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
                    <div>
                        <label htmlFor="confirmpassword">Confirm Password:</label>
                        <div className="mt-2">
                            <input name="confirmpassword" id="confirmpassword" placeholder="Confirm Password..." required className="block w-full rounded-md py-1.5 px-2 border-0 focus:outline-none focus:border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"/>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input id="remember-me" type="checkbox" className="w-4 h-4 rounded border-gray-300 focus:ring-black"/>
                        <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-900">Accept our terms and privacy policy</label>
                    </div>
                    <div>
                        <CustomButton text="Sign Up" paddingX={4} paddingY={2} customWidth="full" textSize="base" buttonType="submit"/>
                        <p className="text-red-600 text-center text-[16px] my-4">{error && error}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegisterPage;