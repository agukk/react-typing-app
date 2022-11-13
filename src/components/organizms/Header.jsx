export const Header = () => {
    return(
    <nav className="bg-white border-b py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
                <a href="/" className="font-bold text-xl text-indigo-600 hover:text-indigo-500">
                    Typract
                </a>
            </div>
            <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
                <a href="/guide" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                    Guide
                </a>
            </div>   
        </div>
    </nav>
    );
}