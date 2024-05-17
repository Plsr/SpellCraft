"use client";

import { useEffect, useMemo, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

export const Solution = ({ word }: { word: string }) => {
  const [currentSolution, setCurrentSolution] = useState<string[]>([]);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    if (currentSolution.join("") === word) {
      setCorrect(true);
    }
  }, [currentSolution, word]);

  const handleClick = (letter: string) => {
    if (word.split("")[currentSolution.length] === letter) {
      setCurrentSolution([...currentSolution, letter]);
    }
  };

  const randomizedLetters = useMemo(() => {
    return word.split("").sort(() => 0.5 - Math.random());
  }, [word]);

  return (
    <>
      {currentSolution}
      <div className="mt-8 w-24 border-b border-b-green" />
      {correct && <ConfettiExplosion />}
      <div className="flex gap-4">
        {randomizedLetters.map((letter, index) => {
          return (
            <div
              className="p-4 bg-gray-800 border border-gray-700 rounded"
              key={index}
              onClick={() => handleClick(letter)}
            >
              {letter.toLowerCase()}
            </div>
          );
        })}
      </div>
    </>
  );
};
