import { useCallback, useEffect, useState } from "react";
import { words } from "../words/EnglishWords";

export const useTyping = () => {
  const [typingString, setTypingString] = useState("");
  const [index, setIndex] = useState(0);
  const [isMissType, setIsMissType] = useState(false);
  const [missCount, setMissCount] = useState(0);
  const [finish, setFinish] = useState(false);
  const [retry, setRetry] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let ts = "";
    for (let i = 0; i < 10; i++) {
      let word = words[Math.floor(Math.random() * words.length)];
      ts += word + " ";
    }
    let newTypingString = ts.slice(0, -1);
    setTypingString(newTypingString);
    // eslint-disable-next-line
  }, [retry]);

  const checkTypingLetter = useCallback(
    (event) => {
      if (finish) {
        return;
      }
      if (event.key === typingString[index]) {
        setIsMissType(false);
        setIndex(index + 1);
        if (index + 1 >= typingString.length) {
          setFinish(true);
          setModalOpen(true);
        }
      } else {
        setIsMissType(true);
        setMissCount(missCount + 1);
      }
    },
    [finish, index, typingString, missCount],
  );

  const initilize = useCallback(() => {
    setIndex(0);
    setIsMissType(false);
    setMissCount(0);
    setFinish(false);
    setRetry(Math.random());
    setModalOpen(false);
  }, []);

  let accuracy = 0;
  if (index > 0 || missCount > 0) {
    accuracy = ((index / (index + missCount)) * 100).toFixed(1);
  }

  return {
    checkTypingLetter,
    typingString,
    index,
    isMissType,
    missCount,
    accuracy,
    initilize,
    modalOpen,
  };
};
