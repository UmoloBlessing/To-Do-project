import styles from './style.module.css'



const Form = ({todo, setTodo, todoList, setTodoList}) => {

    const handleChange = (event)=> {
        setTodo(event.target.value)
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        setTodoList([...todoList, todo])
        console.log(todoList)
    }


    return (
    <div className={styles.todoform}>
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} className={styles.todoinput} placeholder="Add ToDo item"></input>
            <button type='submit' className={styles.todobutton}>Add</button>
        </form>
    </div>
    )
}


export default Form;
