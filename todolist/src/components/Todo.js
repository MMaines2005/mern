import React, {useState} from 'react';


function Todo() {

    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (todo.length === 0) {
            return;
        }
        const todoItem = {
            text: todo,
            isCompleted: false
        }
        setTodos([...todos, todoItem]);
        setTodo('');
    }
    const handleDelete = (index) => {
        const filteredTodos = todos.filter((_todo, i) => {
            return i !== index;
        });
        setTodos(filteredTodos);
    }
    const handleToggle = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={handleChange}/>
                <div>
                <button>Add</button>
                </div>
            </form>
            <ul>
                {todos.map((todo, index) => {
                    const todoClasses = [];
                    if (todo.isCompleted) {
                        todoClasses.push('line-through');
                    }
                    return <li className={todoClasses.join(" ")}style={{listStyle:'none'}}key={index}><input 
                    onChange={() =>{
                        handleToggle(index);
                    }}
                    checked={todo.isCompleted} type= "checkbox"/>{todo.text}
            <button onClick={() => {
                handleDelete(index);
            }}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default Todo;