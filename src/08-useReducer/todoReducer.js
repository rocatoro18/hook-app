// {type: [todo remove], payload: id}

export const todoReducer = (initialState = [], action) => {

    switch(action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            // EL METODO FILTER REGRESA UN NUEVO ARREGLO, LO CUAL
            // NOS SIRVE PORQUE NO MUTA EL ESTADO ACTUAL, A DIFERENCIA DEL PUSH QUE SI MUTA EL ESTADO
            return initialState.filter(todo => todo.id !== action.payload);
            // MAP PUEDE TRANSFORMAR UN ARREGLO A OTRA COSA
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        default:
            return initialState;
    }

}