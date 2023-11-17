import { FC } from "react";
import Letter from "./Letter";
import "../App.css";
import { WORD_LENGTH } from "../constants";

type WordProps = {
    guess: string;
    word: string;
    isSubmitted: boolean;
};

const Word: FC<WordProps> = ({ guess, word, isSubmitted }) => {
    const line = [];
    for (let i = 0; i < WORD_LENGTH; i++) {
        line.push(
            <Letter
                key={i}
                guess={guess}
                index={i}
                word={word}
                isSubmitted={isSubmitted}
            />
        );
    }
    return <div className="Word">{line}</div>;
};

export default Word;
