import { useEffect, useState } from "react";
// eslint-disable-next-line
import axios from "axios";
import { CorrectLetter } from "../atoms/layout/CorrectLetter";
import { MissLetter } from "../atoms/layout/MissLetter";
import { NomalLetter } from "../atoms/layout/NomalLetter";
import { TypeLetter } from "../atoms/layout/TypeLetter";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Typing = () => {
    // words that user types
    let words = [
        "come clean", "sloppy", "black and white", "ancient", "slack off",
        "freebie", "clear-cut", "fiddly", "downtime", "get it",
        "legit", "hyped", "attention-seeking", "get into", "cut corners",
        "big deal", "on the dot", "pricey", "touchy subject", "one-off",
        "rusty", "in-your-face", "downer", "packed", "old-school",
        "sick of", "white noise", "tricky", "slammed", "tell me about it",
        "take it easy", "chill", "on the same page", "give credit", "loaded",
        "cutting-edge", "chill out", "roughly", "selling point", "party animal",
        "wordy", "surefire", "up in the air", "worth a shot", "sharp",
        "burning desire", "face-time", "jump the gun", "fishy", "broken record"
    ]

    const [typingString, setTypingString] = useState("");
    const [index, setIndex] = useState(0);
    const [isMissType, setIsMissType] = useState(false);
    const [missCount, setMissCount] = useState(0);
    const [finish, setFinish] = useState(false);
    const [retry, setRetry] = useState("");

    useEffect(() => {
        let ts = '';
        for (let i = 0; i < 10; i++) {
            let word = words[Math.floor(Math.random() * words.length)];
            ts += word + ' '
        }
        let newTypingString = ts.slice(0,-1)
        setTypingString(newTypingString); 
        // eslint-disable-next-line 
    },[retry]);

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
    }

    const accuracy = (index / (index + missCount) * 100).toFixed(1)

    return(
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
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
        </div>
    );
}