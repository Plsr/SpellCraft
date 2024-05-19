"use client";

import { useEffect, useMemo, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { LetterButton } from "./LetterButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { ArrowRight, Shuffle } from "lucide-react";

export const Solution = ({
  word,
  randomizedLetters,
}: {
  word: string;
  randomizedLetters: string[];
}) => {
  const [currentSolution, setCurrentSolution] = useState<string[]>([]);
  const [correct, setCorrect] = useState(false);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (currentSolution.join("") === word) {
      setCorrect(true);
    }
  }, [currentSolution, word]);

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

  return (
    <>
      <div className="flex gap-4 min-h-16">
        {currentSolution.map((letter, index) => {
          return <LetterButton key={index} letter={letter} />;
        })}
      </div>
      <div
        className="mt-2 mb-8 border-b-2 border-b-orange-300"
        style={{ width: `${randomizedLetters.length * (58 + 12)}px` }}
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
      <div className="grid grid-cols-2 gap-6">
        <button
          onClick={correct ? handleNextClick : () => {}}
          className={clsx(
            "transition-all flex justify-center mt-4 px-4 py-2 font-bold  text-white rounded-lg border border-b-4 ",
            correct && "hover:bg-lime-600 bg-lime-500 border-lime-700",
            !correct && "bg-gray-300 border-gray-400 cursor-not-allowed"
          )}
        >
          <ArrowRight />
          {correct && (
            <>
              <ConfettiExplosion />
            </>
          )}
        </button>
        <button
          onClick={!correct ? handleNextClick : () => {}}
          className={clsx(
            "transition-all flex justify-center mt-4 px-4 py-2 font-bold  text-white rounded-lg border border-b-4 ",
            !correct && "hover:bg-slate-600 bg-slate-500 border-slate-700",
            correct && "bg-gray-400 border-gray-500 cursor-not-allowed"
          )}
        >
          <Shuffle />
        </button>
      </div>
    </>
  );
};
