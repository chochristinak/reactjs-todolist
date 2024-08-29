import TodoCard from "./TodoCard"

export default function TodoList() {
    let todos =[
        'Learn typescript',
        'Study big O notation',
        'Give more hugs'
    ]

        return (
         <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}