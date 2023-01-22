import * as React from 'react';

type TodoCardProps = {
    todoText: string
    objectID: number
    removeFn: (index: number) => void;
    doneFn: (index: number) => void;
    done?: boolean;
}

const TodoCard = (props: TodoCardProps) => {

    return (
        <div>
            <p>
                {props.todoText}
                {props.done && <button id="delete" onClick={() => props.removeFn(props.objectID)}>❌</button>}
                {props.done && <button id="done" onClick={() => props.doneFn(props.objectID)}>✅</button>}
            </p>
        </div >
    )

}

export { TodoCard }
