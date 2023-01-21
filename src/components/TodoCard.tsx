import * as React from 'react';

type TodoCardProps = {
    todoText: string
}

const TodoCard = (props: TodoCardProps) => {

    return (
        <div>
            <p>
                {props.todoText}
                <button id="delete">❌</button>
                <button id="done">✅</button>
            </p>
        </div>
    )

}

export { TodoCard }
