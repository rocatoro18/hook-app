import React from 'react';
//import {memo} from 'react';

// EL MEMO ES UNA FUNCION QUE LE DICE A REACT MEMORIZA ESTE COMPONENTE
// SOLO CUANDO LAS PROPERTIES CAMBIAN, SE VA A VOLVER A EJECUTAR ESTO
export const Small = React.memo(({value}) => {

    console.log('SIUU');

    return(
        <small>{value}</small>
    )
})