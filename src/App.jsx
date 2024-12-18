import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./random-quote/styles.css";



function App() {
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
    }, []); 

    function handleClick() {
        fetchAdvice(); 
    }

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={handleClick}>
                    <span>GIVE ME ADVICE!</span>
                </button>
            </div>
        </div>
    )

}

export default App
