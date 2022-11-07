import { useEffect, useState } from "react";
import { CorrectLetter } from "../atoms/layout/CorrectLetter";
import { MissLetter } from "../atoms/layout/MissLetter";
import { NomalLetter } from "../atoms/layout/NomalLetter";
import { TypeLetter } from "../atoms/layout/TypeLetter";

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

    useEffect(() => {
        let ts = '';
        for (let i = 0; i < 10; i++) {
            let word = words[Math.floor(Math.random() * words.length)];
            ts += word + ' '
        }
        let newTypingString = ts.slice(0,-1)
        setTypingString(newTypingString); 
        // eslint-disable-next-line 
    },[]);

    const checkTypingLetter = (event) => {
        if (event.key === typingString[index])
        {
            setIsMissType(false);
            setIndex(index + 1);
        }
        else
        {
            setIsMissType(true);
        }
    }

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
        </div>
    );
}