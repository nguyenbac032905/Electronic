import { MainContentFooter } from "@/app/admin/_components";

const MainContent = ({children, isFooter}: AdminMainContentProps) => {
    return (
        <main className="w-full h-full bg-gray-50">
            {children}
            {isFooter && (
                <div className="mx-4 mt-4">
                    <MainContentFooter />
                </div>
            )}
        </main>
    )
}
export default MainContent;