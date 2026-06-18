import { MainContentFooter } from "@/app/(dashboard)/admin/_components";

const MainContent = ({children, isFooter}: AdminMainContentProps) => {
    return (
        <main className="flex-1 h-full bg-gray-50 rounded-sm">
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