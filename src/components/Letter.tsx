import { FC } from "react";
import "../App.css";
type LetterProps = {
    guess: string;
    index: number;
    word: string;
    isSubmitted: boolean;
};

const Letter: FC<LetterProps> = ({ guess, index, word, isSubmitted }) => {
    const char = guess[index];
    const result =
        char === word[index] ? "Correct" : word.includes(char) ? "Partial" : "";

    return (
        <div className="Tile">
            <div className={`Letter ${isSubmitted ? result : ""}`}>{char}</div>
        </div>
    );
};

export default Letter;
