import React from "react";
import { useLocation } from "react-router-dom";

export default function Wallet () {
    
    const location = useLocation();
    const properties = location.state.properties;
    const message = location.state.message

    return (
        <div className="max-w-[800px] h-[100vh] mx-auto flex flex-col justify-center border p-20">
            {properties?.map(props => (
                <div>
                    <div className="mt-5">{props.name}</div>
                    <div className="font-extrabold">{props.value}</div>
                </div>
            ))}
            {message&&message}
        </div>
     )
} 