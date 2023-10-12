import { useLayoutEffect, useRef, useState } from 'react';


export const CharacterInfo = ({image, name, status}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0});

    useLayoutEffect(()=>{
        const {height, width} = pRef.current.getBoundingClientRect();
        setBoxSize({
            height,
            width
        })
    },[name])

    return(
        <>
                <img src={image} width={200} height={200}></img>
                <blockquote className="blockquote text-end"
                style={{display:'flex'}}
                >
                    <p ref={pRef} className="mb-1">{name}</p>
                    <footer className="blockquote-footer"> {status} </footer>
                </blockquote>
            <code>{JSON.stringify(boxSize)}</code>

        </>
    )
}