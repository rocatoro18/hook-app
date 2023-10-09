import { useState } from "react"


// Un hook no es mas que una funcion 
export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        // if(counter == 0) return;
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }
    
    return {
        counter,
        increment,
        decrement,
        reset
    }
}