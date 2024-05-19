"use client";

import { useEffect, useMemo, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { LetterButton } from "./LetterButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Solution = ({ word }: { word: string }) => {
  const [currentSolution, setCurrentSolution] = useState<string[]>([]);
  const [correct, setCorrect] = useState(false);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (currentSolution.join("") === word) {
      setCorrect(true);
    }
  }, [currentSolution, word]);

  useEffect(() => {
    console.log("doing it");
  }, [router]);

  const handleClick = (letter: string, index: number) => {
    if (word.split("")[currentSolution.length] === letter) {
      setCurrentSolution([...currentSolution, letter]);
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  const handleNextClick = () => {
    setCorrect(false);
    setCurrentSolution([]);
    setSelectedIndices([]);
    router.refresh();
  };

  const randomizedLetters = useMemo(() => {
    return word.split("").sort(() => 0.5 - Math.random());
  }, [word]);

  return (
    <>
      <div className="flex gap-4 min-h-12">
        {currentSolution.map((letter, index) => {
          return <LetterButton key={index} letter={letter} />;
        })}
      </div>
      <div
        className="mt-2 mb-8 border-b border-b-green"
        style={{ width: `${randomizedLetters.length * (44 + 12)}px` }}
      />

      <div className="flex gap-4">
        {randomizedLetters.map((letter, index) => {
          return (
            <LetterButton
              key={index}
              letter={letter}
              onClick={() => handleClick(letter, index)}
              disabled={selectedIndices.includes(index)}
              clickBehavior={
                word[currentSolution.length] === letter ? "correct" : "false"
              }
            />
          );
        })}
      </div>

      {correct && (
        <>
          <ConfettiExplosion />
          <button
            onClick={handleNextClick}
            className="transition-all hover:bg-lime-600 mt-4 px-4 py-2 font-bold bg-lime-500 text-white rounded-lg border border-b-4 border-lime-700"
          >
            Weiter
          </button>
        </>
      )}
    </>
  );
};
