import { useCounter, useFetch } from '../hooks';
import { LoadingCharacter } from '../03-examples/components/LoadingCharacter';
import { CharacterInfo } from '../03-examples/components/CharacterInfo';

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch('https://rickandmortyapi.com/api/character/'+counter);

    console.log(counter);

    //console.log({data});

    // CONDICIONAL PARA LA DESESTRUCTURACION (DOBLE NEGACION)
    //const {name, status} = !!data && data[0];

    console.log(data);

    // LOS HOOKS NO DEBEN SER RENDERIZADOS DE MANERA CONDICIONAL
    /*
    if (isLoading){
        return (
            <h1>Cargando...</h1>
        )
    }
    */
    return(
        <>
        <h1>Rick and Morty Character: is Alive?</h1>
        <hr/>

        {
            // Usar el operador ternario solo si son pocas lineas de codigo
            isLoading 
                ? 
                <LoadingCharacter/>
                : 
                <CharacterInfo image={data.image} name={data.name} status={data.status}/>
                

        }

        <button className="btn btn-primary mt-2" disabled={isLoading} onClick={() => increment()}>
            Next Character
        </button>

        </>
    )
}