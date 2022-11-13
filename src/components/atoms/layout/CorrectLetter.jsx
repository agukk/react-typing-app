export const CorrectLetter = ({ typingString, index }) => {
    return (
        <span className='text-green-500'>{typingString.slice(0, index)}</span>
    );
};
