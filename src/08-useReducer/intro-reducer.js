
const initialState = [{
    id: 1,
    todo: 'Hacer tarea',
    done: false,
}];

// UN REDUCER EN UNA FUNCION PURA QUE REGRESA UN STRING
// EL ACTION ES LO QUE LE DICE AL REDUCER COMO MANIPULAR EL STATE
const todoReducer = (state = initialState, action = {}) => {

    // SIEMPRE HAY QUE EVITAR MUTAR EL ESTADO, LO CORRECTO ES GENERAR UNO NUEVO
    // NO HACER ESTO: state.push(action.payload)
    if(action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }


    return state;
}

let todos = todoReducer();

const newTodo = {    
    id: 2,
    todo: 'Hola',
    done: false,
};

/* NO HACER ESTO YA QUE ES UNA MUTACION
todos.push({
    id: 2,
    todo: 'Hola',
    done: false,
});
*/

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos,addTodoAction);

console.log(todos);