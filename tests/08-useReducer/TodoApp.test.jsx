import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en <TodoApp />',()=>{

    // RESULTADO CUANDO SE LLAMA EL MOCK CON EL 
    // RESULTADO QUE YO QUIERO QUE TENGA
    useTodos.mockReturnValue({
        todos:[
            {id:1,description:'Todo 1',done:false},
            {id:2,description:'Todo 2',done:false}
        ],
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 1,
        pendingTodosCount: 2

    });

    test('debe de mostrar el componente correctamente',()=>{
        render(<TodoApp/>);
        //screen.debug();
        expect(screen.getByText('Todo 1')).toBeTruthy();
        expect(screen.getByText('Todo 2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        //console.log(screen.getByRole('textbox'));
    });
});