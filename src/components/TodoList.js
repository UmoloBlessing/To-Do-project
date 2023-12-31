import Todo from "./Todo";
const TodoList = ({ todoList }) => {
    return (
        <div>
            {todoList.map((todoItem) => (
                <Todo key={todoItem.id} todoItem={todoItem} todoList={todoList}></Todo>
            ))}
        </div>
    )
}

export default TodoList;