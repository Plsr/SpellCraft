import { Solution } from "@/components/Solution";
import { Speak } from "@/components/Speak";
import Image from "next/image";

export default function Home() {
  const words = [
    "Apfel",
    "Buch",
    "Katze",
    "Hund",
    "Haus",
    "Auto",
    "Baum",
    "Fisch",
    "Vogel",
    "Blume",
    "Stuhl",
    "Tisch",
    "Lampe",
    "Fenster",
    "Brot",
    "Milch",
    "Wasser",
    "Kaffee",
    "Zucker",
    "Salz",
    "Butter",
    "Schule",
    "Lehrer",
    "Schüler",
    "Freund",
    "Mutter",
    "Vater",
    "Bruder",
    "Schwester",
    "Onkel",
    "Tante",
    "Mensch",
    "Wald",
    "Fluss",
    "Strand",
    "Stadt",
    "Himmel",
    "Sonne",
    "Stern",
    "Wolke",
    "Regen",
    "Schnee",
    "Wetter",
    "Woche",
    "Monat",
    "Frühling",
    "Sommer",
    "Herbst",
    "Winter",
    "Straße",
    "Brücke",
    "Markt",
    "Geschäft",
    "Laden",
    "Hotel",
    "Restaurant",
    "Kino",
    "Theater",
    "Museum",
    "Kirche",
    "Schloss",
    "Bahnhof",
    "Flughafen",
    "Fahrrad",
    "Schiff",
    "Flugzeug",
    "Computer",
    "Handy",
    "Internet",
    "Fernseher",
    "Zeitung",
  ];

  const testWords = [
    {
      name: "Apfel",
      image: "/images/apple.webp",
    },
    {
      name: "Hause",
      image: "/images/house.webp",
    },
    {
      name: "Hund",
      image: "/images/dog.webp",
    },
    {
      name: "Katze",
      image: "/images/cat.webp",
    },
  ];

  const randomWord = testWords.sort(() => 0.5 - Math.random())[0];

  return (
    <div className="bg-yellow-50 h-full flex items-center justify-center">
      <div className="flex flex-col bg-orange-100 p-8 rounded-xl border-4 border-orange-200">
        <Speak word={randomWord.name} />
        <Image
          className="rounded-lg max-h-72 my-6 mx-auto"
          src={randomWord.image}
          alt={randomWord.name}
          width={300}
          height={500}
        />
        <Solution
          word={randomWord.name}
          randomizedLetters={randomWord.name
            .split("")
            .sort(() => 0.5 - Math.random())}
        />
      </div>
    </div>
  );
}
