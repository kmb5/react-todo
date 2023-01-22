import * as React from 'react';
import { TodoCard } from './TodoCard'

interface ITodo {
    todoText: string,
    objectID: number
}

interface ITodoList extends Array<ITodo> { }


const TodoList = () => {

    const [todoText, setTodoText] = React.useState<string>('');
    const [todos, setTodo] = React.useState<ITodoList>([]);
    const [oID, setOID] = React.useState<number>(0);

    const handleAddTodo = () => {
        const td: ITodo = { todoText: todoText, objectID: handleSetOID() }
        todos.push(td)
        setTodo(todos)
        setTodoText('')
        console.log(todos)
    }

    const handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value)
    }

    const handleSetOID = () => {
        setOID(oID + 1)
        return oID
    }

    return (
        <div>
            <ul>
                {todos.map((item) => (
                    <TodoCard key={item.objectID} todoText={item.todoText} />
                ))
                }
            </ul>
            <div>
                <input id="todoText" type="text" placeholder="type something..." onChange={handleType} value={todoText} />
                <button id="addTodo" onClick={handleAddTodo}>Add</button>
            </div>
        </div>
    )
}

export { TodoList }
export type { ITodo, ITodoList }
