export const PrimaryButton = ({ children }) => {
    return(
        <button className="bg-indigo-700 hover:bg-indigo-600 shadow-xl font-semibold text-2xl text-white py-3 px-4 rounded">
            { children }
        </button>
    );
}