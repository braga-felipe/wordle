import { FC } from "react";
import "../App.css";

type NavBarProps = {};

const NavBar: FC<NavBarProps> = () => {
    return (
        <div className="NavBar">
            <h2>Wordle</h2>
        </div>
    );
};

export default NavBar;
