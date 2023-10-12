import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    
    const [counter,setCounter] = useState(1);

    // (INCREMENTFATHER) NO SE VUELVE A DIBUJAR EL SHOW INCREMENT POR QUE ESTA MEMORIZADA LA
    // FUNCION
    // EL useCallback SIRVE PARA MEMORIZAR FUNCIONES
    const incrementFather = useCallback(
        (value)=>{
        setCounter((c) => c + value );
    },[])

    // LAS FUNCIONES COMO LOS OBJETOS SIEMPRE APUNTAN A UN LUGAR DE MEMORIA DIFERENTE
    /*
    useEffect(()=>{
        //incrementFather();
    },[incrementFather])
    */
    /*
    const incrementFather = () => {
        setCounter(counter + 1);
    }
    */

    return(
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={incrementFather}/>
        </>
    )
}