import clsx from "clsx";
import { useState } from "react";

export const LetterButton = ({
  letter,
  onClick,
  clickBehavior,
  disabled = false,
}: {
  letter: string;
  onClick?: (letter: string) => void;
  clickBehavior?: "correct" | "false";
  disabled?: boolean;
}) => {
  const [shouldAnimate, setShouldAnimate] = useState<
    "correct" | "false" | undefined
  >(undefined);

  const handleClick = () => {
    if (clickBehavior) {
      setShouldAnimate(clickBehavior);
      setTimeout(() => {
        setShouldAnimate(undefined);
      }, 300);
    }

    onClick && onClick(letter);
  };

  return (
    <div
      className={clsx(
        "border border-b-4 bg-white rounded-lg text-gray-500 border-gray-200 px-6 py-4 flex items-center",
        !disabled && "hover:shadow-lg cursor-pointer hover:border-gray-300",
        disabled && "opacity-30",
        shouldAnimate === "false" &&
          "transition-none animate-wobble duration-100 bg-red-50 text-red-400",
        shouldAnimate === "correct" && "border-green-600 text-green-700"
      )}
      onClick={handleClick}
    >
      {letter.toLowerCase()}
    </div>
  );
};
