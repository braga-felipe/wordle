import { useEffect, useState } from "react";
import "./App.css";
import { getWord } from "./api-service";
import Board from "./components/Board";
import NavBar from "./components/NavBar";

function App() {
    const [word, setWord] = useState<string>("");
    const setNewWord = async () => {
        const newWord = await getWord();
        setWord(newWord.toLowerCase());
    };

    useEffect(() => {
        setNewWord();
    }, []);

    return (
        <div className="App">
            <NavBar />
            <Board word={word} setNewWord={setNewWord} />
        </div>
    );
}

export default App;
