import * as React from 'react';

import { TodoCard } from './TodoCard'

interface ITodo {
    todoText: string
}

interface ITodoList extends Array<ITodo> { }

type TodoListProps = {
    todoList: ITodoList
}

const TodoList = (props: TodoListProps) => {
    return (
        <ul>
            {props.todoList.map((item) => (
                <TodoCard todoText={item.todoText} />
            ))
            }
        </ul>
    )
}

export { TodoList }
export type { ITodo, ITodoList }
