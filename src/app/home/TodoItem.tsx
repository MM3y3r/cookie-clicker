import styles from "./page.module.css";

type TodoItem = {
    title: string;
    info: string;
    date: string;
};

export default function TodoItem(props: TodoItem) {
    const { title, info, date } = props;

    return (
        <div className={styles.todoItem}>
            <div>{title}</div>
            <div>{info}</div>
            <div>{date}</div>
        </div>
    );
}
