"use client"
import React from "react"
import { Toaster } from "react-hot-toast"

const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Toaster 
                toastOptions={{
                    className:"",
                    style: {fontSize: "17px"}
                }}
            />
            {children}
        </>
    )
}
export default Providers;