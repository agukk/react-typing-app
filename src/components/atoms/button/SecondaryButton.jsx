export const SecondaryButton = ({ children }) => {
  return (
    <button className='bg-indigo-700 hover:bg-indigo-600 shadow-xl font-semibold text-xl text-white py-2 px-3 rounded'>
      {children}
    </button>
  );
};
