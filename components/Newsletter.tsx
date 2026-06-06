
const NewsLetter = () => {
    return (
        <div className="bg-white py-16 lg:py-32 sm:py-24">
            <div className="mx-auto max-w-screen-2xl grid justify-items-center grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
                <div className="lg:col-span-7 max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <h2 className="inline lg:inline xl:block sm:block max-xl:text-xl">Want product news and updates? </h2>
                    <p className="inline lg:inline xl:block sm:block max-xl:text-xl">Sign up for our newsletter</p>
                </div>
                <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                    <div className="flex gap-x-4">
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input 
                            type="email"
                            id="email-address"
                            name="email"
                            autoComplete="email"
                            required
                            className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter your email..."
                        />
                        <button type="submit" 
                            className="flex-none rounded-md bg-custom-yellow px-3.5 
                            py-2.5 text-sm font-semibold shadow-sm hover:bg-black hover:text-custom-yellow cursor-pointer"
                        >Subcribe</button>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-900"
                        >We care about your data. Read our{" "}
                        <a href="#" className="font-semibold hover:text-custom-yellow">privacy & policy</a>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default NewsLetter;