import React from "react";
import Button from "../button/button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram()
    return (
        <div className={"header"}>
            <button onClick={onClose}>Закрыть</button>
            <span className={"username"}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header