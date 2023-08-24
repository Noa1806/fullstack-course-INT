/* eslint-disable @typescript-eslint/no-explicit-any */
import "./dist/button.css";
import { FC, SetStateAction } from "react";

interface Button {
    text: SetStateAction<any>;
  }

const Button: FC<Button> = ({text}) => {
        return (
            <div className="button">
                <button className="button-paper" role="button">{text}</button>
            </div>
        )
    
}

export default Button;