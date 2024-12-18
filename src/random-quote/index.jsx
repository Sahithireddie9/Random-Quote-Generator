import React, { useEffect, useState } from "react";
import "./styles.css";

export function RandomQuote() {
    const [advice, setAdvice] = useState(""); // State to hold advice text

    // Function to fetch advice
    async function fetchAdvice() {
        try {
            const apiResponse = await fetch("https://api.adviceslip.com/advice", {
                method: "GET",
            });
            const data = await apiResponse.json();
            if (data) {
                setAdvice(data.slip.advice); // Update advice state
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // Fetch advice on component mount
    useEffect(() => {
        fetchAdvice();
    }, []); // Dependency array ensures it runs only once on mount

    // Handler for the button click
    function handleClick() {
        fetchAdvice(); // Fetch a new piece of advice
    }

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button">
                    <span>GIVE ME ADVICE!</span>
                </button>
            </div>
        </div>
    )
}

