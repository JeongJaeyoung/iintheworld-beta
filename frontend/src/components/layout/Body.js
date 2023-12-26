import React from "react";
import "./Body.css";

export default function Body({children}){

    return (
        <>
            <div id="body_position">
                {children}
            </div>
        </>
    )
}