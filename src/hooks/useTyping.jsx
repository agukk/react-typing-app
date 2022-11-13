import { useCallback, useEffect, useRef, useState } from "react";
import { randomWordApi } from "../api/randomWordApi";

export const useTyping = () => {
  const [typingString, setTypingString] = useState("");
  const [index, setIndex] = useState(0);
  const [isMissType, setIsMissType] = useState(false);
  const [missCount, setMissCount] = useState(0);
  const [finish, setFinish] = useState(false);
  const [retry, setRetry] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const renderFlagRef = useRef(false);

  useEffect(() => {
    let letter = "";
    setIsLoading(false);
    const getWord = async () => {
      for (let i = 0; i < 4; i++) {
        const response = await randomWordApi.get();
        letter += response.data[0] + " ";
      }
      const response = await randomWordApi.get();
      letter += response.data[0];
      setTypingString(letter);
      setIsLoading(true);
    };
    if (renderFlagRef.current) {
      getWord();
    } else {
      renderFlagRef.current = true;
    }
  }, [retry]);

  const checkTypingLetter = useCallback((event) => {
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
  }, [finish, index, typingString, missCount]);

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

  return {isLoading, checkTypingLetter, typingString, index, isMissType, missCount, accuracy, initilize, modalOpen};
};