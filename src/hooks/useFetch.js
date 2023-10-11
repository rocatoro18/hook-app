import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });

        //console.log(data);
    }

    // INTERNAMENTE PUEDE TENER TAREAS ASINCRONAS, PERO
    // NO PUEDO DEFINIR ESO EN SU CALLBACK
    useEffect(()=>{
        getFetch();
    },[url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };

}
