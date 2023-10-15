import { TodoItem } from "./TodoItem"


export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {



    return (
        <>
        <ul className="list-group">
            {
                todos.map(todo => (
                    // Crear elemento personalidado TodoItem... mostrar descripcion del Todo...
                    // no emitir nada de borrar
                    <TodoItem key={todo.id} todo={todo} onDeleteTodo={id => onDeleteTodo(id)} onToggleTodo={onToggleTodo}/>
                ))
            }
        </ul>
        </>
    )
}