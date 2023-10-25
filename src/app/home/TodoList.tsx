"use client";
import { useContext } from "react";
import { TodoContext } from "../page";
import TodoItem from "./TodoItem";
import styles from "./page.module.css";

export default function TodoList() {
    const { todos, setTodos } = useContext(TodoContext);

    console.log(todos);

    return (
        <div className={styles.todoList}>
            {todos &&
                todos.map((todo, index) => (
                    <TodoItem
                        title={todo.title}
                        info={todo.info}
                        date={todo.date}
                        key={index}
                    />
                ))}
        </div>
    );
}
