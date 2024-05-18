import clsx from "clsx";

export const LetterButton = ({
  letter,
  onClick,
  disabled = false,
}: {
  letter: string;
  onClick?: (letter: string) => void;
  disabled?: boolean;
}) => {
  const handleClick = () => {
    onClick && onClick(letter);
  };

  return (
    <div
      className={clsx(
        "border border-b-4 rounded-lg text-gray-500 border-gray-200 transition-all   px-4 py-2 flex items-center",
        !disabled && "hover:shadow-lg cursor-pointer hover:border-gray-300",
        disabled && "opacity-30"
      )}
      onClick={handleClick}
    >
      {letter.toLowerCase()}
    </div>
  );
};
