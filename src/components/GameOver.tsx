import { FC } from "react";
import "../App.css";
type GameOverProps = {
    handleRestart: () => void;
};

const GameOver: FC<GameOverProps> = ({ handleRestart }) => {
    return (
        <div className="GameOver">
            <div className="Button">
                <h1>Game Over</h1>
                <button onClick={handleRestart}>Restart</button>
            </div>
        </div>
    );
};

export default GameOver;
