"use client";

import { useEffect, useState } from "react";

export const Speak = ({ word }: { word: string }) => {
  const [isClientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  if (!isClientSide) {
    // You can show some kind of placeholder UI here
    return null;
  }

  function speak() {
    const utterance = new window.SpeechSynthesisUtterance(word);
    utterance.lang = "de-DE";
    utterance.rate = 0.7;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div>
      <button onClick={speak}>Drück mich</button>
    </div>
  );
};
