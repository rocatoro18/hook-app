import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const initialState = [
    //{
    //id: new Date().getTime(),
    //description: 'Hacer tarea',
    //done: false,
    //},
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {
    
    // NO EJECUTAR TODO REDUCER, SOLO PASAR LA REFERENCIA A LA FUNCION
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    const handleNewTodo = (todo) => {
        // CREO LA ACCIONES
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        //console.log(todos);
        //console.log(action);
        // MANDO LA ACCION AL REDUCER MEDIANTE EL DISPATCH
        dispatch(action);
        //console.log(todos);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        //console.log(id);
        
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
        
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length
    }

}