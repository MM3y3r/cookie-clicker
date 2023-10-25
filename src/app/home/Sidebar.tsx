"use client";

import styles from "./page.module.css";
import { useContext, useState } from "react";
import { TodoContext } from "../page";

export default function Sidebar() {
    const [title, setTitle] = useState("Hi!");
    const [info, setInfo] = useState("Hi!");
    const handleChangeTitle = (event) => setTitle(event.target.value);
    const handleChangeInfo = (event) => setInfo(event.target.value);

    // usecontext
    const { todos, setTodos } = useContext(TodoContext);

    const handleAddTodo = () => {
        console.log("adding todo");

        setTodos((prevTodos) => {
            console.log(prevTodos);

            return [
                ...prevTodos,
                {
                    title: title,
                    info: info,
                    date: new Date().toISOString(),
                },
            ];
        });
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarItem}>Title</div>
            <input
                value={title}
                onChange={handleChangeTitle}
                className={styles.sidebarItem}
            />
            <div className={styles.sidebarItem}>Info</div>
            <input
                value={info}
                onChange={handleChangeInfo}
                className={styles.sidebarItem}
            />
            <button
                onClick={() => handleAddTodo()}
                className={styles.sidebarItem}
            >
                Add Todo
            </button>
        </div>
    );
}
