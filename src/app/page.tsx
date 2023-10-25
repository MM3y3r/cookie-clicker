"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { createContext, useState } from "react";

const exampleTodos = [
    {
        title: "Dont forget to vacuum!",
        info: "living room, kitchen",
        date: "23.10.2023",
    },
    {
        title: "Dont forget to vacuum!",
        info: "living room, kitchen",
        date: "23.10.2023",
    },
    {
        title: "Dont forget to vacuum!",
        info: "living room, kitchen",
        date: "23.10.2023",
    },
    {
        title: "Dont forget to vacuum!",
        info: "living room, kitchen",
        date: "23.10.2023",
    },
];

export const TodoContext = createContext({
    todos: exampleTodos,
    setTodos: (todos: any) => {},
});

export default function Home() {
    const [todos, setTodos] = useState();
    const value = { todos, setTodos };

    return (
        <TodoContext.Provider value={value}>
            <main className={styles.main}>
                <Link href="/home">Welcome! Enter here!</Link>
            </main>
        </TodoContext.Provider>
    );
}
