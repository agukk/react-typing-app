export const MissLetter = ({ typingString, index }) => {
  return (
    <span className='text-red-500 bg-slate-100'>{typingString[index]}</span>
  );
};
