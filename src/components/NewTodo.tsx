type NewTodoProps = {

    value: string
    onButtonPress: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onType: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewTodo = (props: NewTodoProps) => {

    return (

        <div>
            <input id="todoText" type="text" placeholder="type something..." onChange={props.onType} value={props.value} />
            <button id="addTodo" onClick={props.onButtonPress}>Add</button>
        </div>

    )


}

export { NewTodo }
