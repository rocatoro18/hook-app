import React from 'react';

export const ShowIncrement = React.memo(({increment}) => {

    // NO PUEDE MEMORIZAR CON MEMO PORQUE LAS FUNCIONES SE ALMACENAN EN DIFERENTES DIRECCIONES
    // DE MEMORIA
    console.log('Me volvi a generar');

    return(
        <button 
            className="btn btn-primary"
            onClick={()=>{increment(5);
            }}
        >
            Incrementar
        </button>
    )
})