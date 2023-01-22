import * as React from 'react';
import { TodoCard } from './TodoCard'

interface ITodo {
    todoText: string,
    objectID: number
}

interface ITodoList extends Array<ITodo> { }


const TodoList = () => {

    const [todoText, setTodoText] = React.useState<string>('');
    const [todos, setTodos] = React.useState<ITodoList>([]);
    const [doneTodos, setDoneTodos] = React.useState<ITodoList>([]);
    const [oID, setOID] = React.useState<number>(0);

    const handleAddTodo = () => {
        if (todoText === "") {
            return;
        }
        const td: ITodo = { todoText: todoText, objectID: handleSetOID() }
        todos.push(td)
        setTodos(todos)
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

    const handleRemoveTodo = (objectID: number) => {
        setTodos(todos.filter(todo => todo.objectID !== objectID))
    }

    const handleTodoDone = (objectID: number) => {
        doneTodos.push(...todos.filter(todo => todo.objectID === objectID));
        setDoneTodos(doneTodos);
        handleRemoveTodo(objectID);
    }

    const deleteAll = (alsoDone: boolean) => {
        setTodos([])
        if (alsoDone) {
            setDoneTodos([])
        }
    }

    return (
        <div>
            <p>TODOS</p>
            <ul>
                {todos.map((item) => (
                    <TodoCard key={item.objectID} todoText={item.todoText} objectID={item.objectID} removeFn={handleRemoveTodo} doneFn={handleTodoDone} />
                ))
                }
            </ul>
            <div>
                <input id="todoText" type="text" placeholder="type something..." onChange={handleType} value={todoText} />
                <button id="addTodo" onClick={handleAddTodo}>Add</button>
            </div>
            <div>
                <p>DONE</p>
                <ul>
                    {doneTodos.map((item) => (
                        <TodoCard key={item.objectID} todoText={item.todoText} objectID={item.objectID} removeFn={handleRemoveTodo} doneFn={handleTodoDone} />
                    ))
                    }
                </ul>
            </div>
            <button id="deleteTodos" onClick={() => deleteAll(false)}>Delete not done</button>
            <button id="deleteAllTodos" onClick={() => deleteAll(true)}>Delete all</button>
        </div>
    )
}

export { TodoList }
export type { ITodo, ITodoList }
