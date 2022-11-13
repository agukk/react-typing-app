export const TypeLetter = ({ typingString, index }) => {
    return (
        <span className='text-gray-500'>
            {typingString.slice(index + 1, typingString.length)}
        </span>
    );
};
