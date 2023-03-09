import React from "react";
import TodoItem from "./TodoItem";

/*
    todos 배열을 사용하여 여러개의 TodoItems 컴포넌트 렌더링
*/

function TodoList() {
    const todos = [
        {
            id : 1,
            text : 'Context API 배우기',
            done : true
        },
        {
            id : 2,
            text : 'Typescript 배우기',
            done : true
        },
        {
            id : 3,
            text : 'Typescript 와 Context API 함께 사용하기',
            done : false
        }
    ];
    
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    );
}

export default TodoList;