import { CorrectLetter } from "../atoms/layout/CorrectLetter";
import { MissLetter } from "../atoms/layout/MissLetter";
import { NomalLetter } from "../atoms/layout/NomalLetter";
import { TypeLetter } from "../atoms/layout/TypeLetter";
import { ResultModal } from "../organizms/ResultModal";
import { LoadingSpin } from "../atoms/layout/LoadingSpin";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useTyping } from "../../hooks/useTyping";

export const Typing = () => {
  const {isLoading, checkTypingLetter, typingString, index, isMissType, missCount, accuracy, initilize, modalOpen} = useTyping();  

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      {isLoading ? (
        <div
          onKeyDown={(event) => checkTypingLetter(event)}
          tabIndex={0}
          className='text-5xl font-serif p-24 cursor-pointer'
        >
          <CorrectLetter typingString={typingString} index={index} />
          {isMissType ? (
            <MissLetter typingString={typingString} index={index} />
          ) : (
            <NomalLetter typingString={typingString} index={index} />
          )}
          <TypeLetter typingString={typingString} index={index} />
        </div>
      ) : (
        <LoadingSpin />
      )}
      <div className='font-light text-2xl space-x-12'>
        <span>CorrectType : {index}</span>
        <span>MissType : {missCount}</span>
        <span>Accuracy : {accuracy} %</span>
      </div>
      <div onClick={initilize} className='pt-12'>
        <SecondaryButton>Retry</SecondaryButton>
      </div>
      <ResultModal
        correctCount={index}
        missCount={missCount}
        modalOpen={modalOpen}
        initilize={initilize}
        accuracy={accuracy}
      />
    </div>
  );
};
