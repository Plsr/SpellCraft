"use client";

import { useEffect, useState } from "react";
import { Volume2, Snail } from "lucide-react";

export const Speak = ({ word }: { word: string }) => {
  const [isClientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  if (!isClientSide) {
    // You can show some kind of placeholder UI here
    return null;
  }

  function speak(slow: boolean) {
    const utterance = new window.SpeechSynthesisUtterance(word);
    utterance.lang = "de-DE";
    utterance.rate = slow ? 0.1 : 1;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="flex gap-4">
      <button
        className="bg-sky-800 self-start text-white font-bold rounded-xl px-4 py-2 border border-sky-900 border-b-4"
        onClick={() => speak(false)}
      >
        <Volume2 />
      </button>
      <button
        className="bg-sky-800 flex gap-2 self-start text-white font-bold rounded-xl px-4 py-2 border border-sky-900 border-b-4"
        onClick={() => speak(true)}
      >
        <Snail />
        <Volume2 />
      </button>
    </div>
  );
};
