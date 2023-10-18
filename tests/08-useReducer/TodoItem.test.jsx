import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', ()=>{

    const todo = {
        id: 1,
        description: 'Tarea',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // Si onDeleteTodo y onToggleTodo se van a llamar
    // mas de una vez en las pruebas, es recomendable
    // que en el beforeach llamemos el clearallmock para que en cada
    // prueba se reseten las evaluaciones

    beforeEach(()=>jest.clearAllMocks());

    test('debe de mostrar el Todo Pendiente de completar',()=>{
        // Montamos
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>);
        // Evaluamos
        const liElement = screen.getByRole('listitem');
        //console.log(liElement.innerHTML);
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center ');
        // Mas adecuado esto que anterior
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
        
        //screen.debug();
    });

    test('debe de mostrar el Todo completado',()=>{
        todo.done = true;
        // Montamos
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>);
        // Evaluamos
        
        
        const spanElement = screen.getByLabelText('span');
        
        expect(spanElement.className).toContain('text-decoration-line-through');
        
        //screen.debug();
    });

    test('span debe de llamar el ToggleTodo cuando se hace click',()=>{
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>);
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('button debe de llamar el deleteTodo',()=>{
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>);
        // SE PUEDE UTILIZAR EL ARIA-LABEL PARA SER MAS ESPECIFICO CON EL
        // BOTON/ELEMENTO O PONERLE EL TESTID
        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });

});