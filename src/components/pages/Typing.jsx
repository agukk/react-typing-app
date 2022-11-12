import axios from "axios";
import { useEffect, useState } from "react";
import { CorrectLetter } from "../atoms/layout/CorrectLetter";
import { MissLetter } from "../atoms/layout/MissLetter";
import { NomalLetter } from "../atoms/layout/NomalLetter";
import { TypeLetter } from "../atoms/layout/TypeLetter";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { ResultModal } from "../organizms/ResultModal";
import { TypingString } from "../atoms/text/TypingString";

export const Typing = () => {
    const [typingString, setTypingString] = useState("");
    const [index, setIndex] = useState(0);
    const [isMissType, setIsMissType] = useState(false);
    const [missCount, setMissCount] = useState(0);
    const [finish, setFinish] = useState(false);
    const [retry, setRetry] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        async function getWord() {
            const response = await axios.get('https://random-word-api.herokuapp.com/word');
            let word = response.data[0]
            setTypingString(word);
        }
        getWord();
    }, [retry])

    const checkTypingLetter = (event) => {
        if (finish)
        {
            return;
        }
        if (event.key === typingString[index])
        {
            setIsMissType(false);
            setIndex(index + 1);
            if (index + 1 >= typingString.length)
            {
                setFinish(true);
                setModalOpen(true);
            }
        }
        else
        {
            setIsMissType(true);
            setMissCount(missCount + 1);
        }
    }

    const initilize = () => {
        setIndex(0);
        setIsMissType(false);
        setMissCount(0);
        setFinish(false);
        setRetry(Math.random());
        setModalOpen(false);
    }

    let accuracy = 0
    if (index > 0 || missCount > 0)
    {
        accuracy = (index / (index + missCount) * 100).toFixed(1)
    }

    return(
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <TypingString>{typingString}</TypingString>
            <div onKeyDown={(event) => checkTypingLetter(event)} tabIndex={0} className='text-5xl font-serif p-24 cursor-pointer'>
                <CorrectLetter typingString={typingString} index={index}/>
                {isMissType ? (
                    <MissLetter typingString={typingString} index={index}/>
                ) : (
                    <NomalLetter typingString={typingString} index={index}/>
                )}
                <TypeLetter typingString={typingString} index={index}/>
            </div>
            <div className='font-light text-2xl space-x-12'>
                <span>CorrectType : { index }</span>
                <span>MissType : { missCount }</span>
                <span>Accuracy : { accuracy } %</span>
            </div>
            <div onClick={initilize} className='pt-12'>
                <PrimaryButton>Retry</PrimaryButton>
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
}