import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'rocatoro18',
        email: 'rocatoro18@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        //console.log({name, value});
        setFormState({
            ...formState,
            // PROPIEDADES COMPUTADAS DE LOS OBJETOS
            [name] : value
        });
    }

    // USE EFFECT - EFECTO SECUNDARIO
    // SI SE DEJA EL DEPS VACIO SOLO SE EJECUTARA UNA VEZ Y CUANDO
    // EL COMPONENTE ES MONTADO (RENDERIZA) LA PRIMERA VEZ
    useEffect(()=>{
        //console.log('UseEffect called!')
    },[]);

    // useEffect CON DEPENDIENCIAS, SOLO CUANDO CAMBIE EL formState y Email
    useEffect(()=>{
        //console.log('UseEffect form state change!')
    },[formState]);

    useEffect(()=>{
        //console.log('UseEffect email change!')
    },[email]);

    return(
        <>
            <h1>Formulario Simple</h1>
            <hr/>

            <input 
            type="text" 
            className="form-control" 
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
            />

            <input 
            type="email" 
            className="form-control mt-2" 
            placeholder="roberto@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
            />

        {
            (username === 'rocatoro') && <Message/>
        }

        </>
    )
}