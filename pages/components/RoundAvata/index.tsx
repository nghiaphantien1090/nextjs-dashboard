import { CSSProperties, ReactNode } from "react";
import { ReactElement } from "react";

export default function index({Diameter,children,cssProps={}}:{Diameter:string,children:ReactElement,cssProps:CSSProperties}){
    return(
        <div  style={{width:`${Diameter}`, height:`${Diameter}`}&&{...cssProps}}>
            {children}
        </div>
    )
}