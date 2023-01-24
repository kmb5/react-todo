import * as React from 'react';
import { TodoCard } from './TodoCard'

interface ITodo {
    todoText: string,
    objectID: number,
}

interface ITodoList extends Array<ITodo> { }

const getObjectFromLocalStorage = (key: string) => {
    const obj = localStorage.getItem(key)
    if (typeof obj === 'string') {
        return JSON.parse(obj)
    }
}

const TodoList = () => {

    const [todoText, setTodoText] = React.useState<string>('');
    const [todos, setTodos] = React.useState<ITodoList>(getObjectFromLocalStorage('todos') || []);
    const [doneTodos, setDoneTodos] = React.useState<ITodoList>(getObjectFromLocalStorage('doneTodos') || []);
    const [oID, setOID] = React.useState<number>(0);

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    React.useEffect(() => {
        localStorage.setItem('doneTodos', JSON.stringify(doneTodos));
    }, [doneTodos])

    const handleAddTodo = () => {
        if (todoText === "") {
            return;
        }
        const td: ITodo = { todoText: todoText, objectID: handleSetOID() }
        setTodos([...todos, td])
        setTodoText('')
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
        const newDoneTodos = todos.filter(todo => todo.objectID === objectID);
        setDoneTodos([...doneTodos, ...newDoneTodos]);
        handleRemoveTodo(objectID);
        console.log('done', doneTodos);
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
                    <TodoCard key={item.objectID} todoText={item.todoText} objectID={item.objectID} removeFn={handleRemoveTodo} doneFn={handleTodoDone} done={true} />
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
