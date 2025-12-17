import type{ ReactElement } from "react";

type Variants = "primary" | "secondary";


export interface ButtonProps { 
    variant: Variants;
    size?: "sm" | "md" | "lg";
    text: string;
    stratIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: Boolean
}

const variantStyles = { 
    "primary": "bg-[#5046e4] text-white",
    "secondary": "bg-[#e0e7ff] text-[#5046e4]"
}

const defaultStyles = "rounded-md flex"

const sizeStyles = { 
    "sm": "py-1 px-2 text-sm",
    "md": "py-2 px-4 text-md",
    "lg": "py-4 px-6 text-lg"
}


export const Button = (props: ButtonProps) => { 
    return<button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size || 'md']} ${props.fullWidth? "w-full flex justify-center" : ""}`}>
        <div className="flex justify-center items-center">
      {props.stratIcon ? <div className="pr-2">{props.stratIcon}</div> : null} 
        {props.text} 
      {props.endIcon? <div className="pl-2">{props.endIcon}</div> : null}
      </div>
        </button>
}