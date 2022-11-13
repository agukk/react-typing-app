export const StrongPoint = ({ children }) => {
    return (
        <p className='flex items-center -mx-2 text-gray-700 dark:text-gray-200'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 mx-2 text-blue-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
            >
                <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
            </svg>

            <span className='mx-2'>{children}</span>
        </p>
    );
};
