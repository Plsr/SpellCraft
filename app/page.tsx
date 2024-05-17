import { Solution } from "@/components/Solution";
import { Speak } from "@/components/Speak";

export default function Home() {
  const word = "Hase";
  return (
    <div>
      <Speak word={word} />
      <Solution word={word} />
    </div>
  );
}
