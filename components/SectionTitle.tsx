
const SectionTitle = ({title, path}: {title: string, path: string}) => {
    return (
        <div className="h-[250px] border-b border-gray-600 bg-custom-yellow pt-16 mb-5 max-sm:h-[200px]">
            <h1 className="text-center text-7xl mb-10 max-md:text-6xl max-sm:text-5xl max-sm:mb-5">{title}</h1>
            <p className="text-center text-xl">{path}</p>
        </div>
    )
}
export default SectionTitle;