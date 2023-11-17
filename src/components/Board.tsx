import { FC, useEffect, useState } from "react";
import "../App.css";
import Word from "./Word";
import GameOver from "./GameOver";
type BoardProps = {
    word: string;
    setNewWord: () => void;
};

const Board: FC<BoardProps> = ({ word, setNewWord }) => {
    const [guesses, setGuesses] = useState<string[]>(Array(6).fill(""));

    const [guessCount, setGuessCount] = useState<number>(0);

    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    const [currentGuess, setCurrentGuess] = useState<string>("");

    const isSolution = word.toLowerCase() === currentGuess.toLowerCase();

    useEffect(() => {
        const handleGuess = (event: KeyboardEvent) => {
            if (isGameOver) {
                return;
            }
            setCurrentGuess((prev) => {
                // handles backspace
                if (event.key === "Backspace") {
                    return prev.slice(0, -1);
                }

                // handles enter TODO: colors of submission
                if (event.key === "Enter" && prev.length === 5) {
                    if (isSolution || guessCount === 5) setIsGameOver(true);
                    setGuessCount((prev) => prev + 1);
                    setGuesses((oldGuesses) => {
                        const newGuesses = [...oldGuesses];
                        newGuesses[guessCount] = prev;
                        return newGuesses;
                    });
                    return "";
                }

                // hanldes input: only keyboard letters and only adds letter is current guess is less than 5 letters long
                if (
                    event.key.match(/^[a-zA-Z]+$/g) &&
                    event.key.length === 1 &&
                    prev.length < 5
                ) {
                    return prev + event.key.toLowerCase();
                }

                return prev;
            });
        };
        window.addEventListener("keydown", handleGuess);
        return () => window.removeEventListener("keydown", handleGuess);
    }, [guessCount, isGameOver, isSolution]);

    const handleRestart = () => {
        setNewWord();
        setGuesses(Array(6).fill(""));
        setGuessCount(0);
        setIsGameOver(false);
        setCurrentGuess("");
    };
    console.log(word);
    return (
        <div className="Board">
            {word}
            {isGameOver && <GameOver handleRestart={handleRestart} />}
            {guesses.map((guess, index) => {
                const isCurrentGuess = (index: number) => {
                    return guessCount === index;
                };

                return (
                    <Word
                        key={index}
                        word={word}
                        guess={isCurrentGuess(index) ? currentGuess : guess}
                        isSubmitted={!isCurrentGuess(index)}
                    />
                );
            })}
        </div>
    );
};

export default Board;
