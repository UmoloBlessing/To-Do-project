import styles from './style.module.css'


const Todo = ({ todoItem, todoList }) => {

    const deleteTodo = () => {
        todoList.filter((item) => item.id !== todoItem.id)
    }

    return (
        <div>
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>Todo Item</h3>
                <h1>{todoItem.name}</h1>
                <button onClick={deleteTodo} className={styles.deletebutton}>Done</button>
            </div>
        </div>
    )
}


export default Todo;