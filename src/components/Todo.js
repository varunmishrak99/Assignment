import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { FaSearch } from 'react-icons/fa';

const Todo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const { setUser, setTodo } = useContext(UserContext);

    const getTodos = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        if (res.status === 200) {
            setTodos(data);
        }
    }

    const getUser = async (todo) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${todo.id}`);
        const data = await res.json();
        setTodo(todo);
        setUser(data);
    }

    const handleInput = (e) => {
        const val = e.target.value;
        setInput(val);
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <>
            <div className="todo-top">
                <div className="todo-heading">Todos</div>
                <div className="todo-search"><FaSearch /><input type="text" placeholder='Search...' onChange={handleInput} /></div>
            </div>
            <table className="todo-table">
                <thead>
                    <tr>
                        <th className="table-type-1">ToDo Id</th>
                        <th className="table-title">Title</th>
                        <th className="table-type-1">Status</th>
                        <th className="table-type-1">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.filter(todo => {
                            if (input === '') {
                                return todo;
                            } else if (todo.title.toLowerCase().includes(input.toLowerCase())) {
                                return todo;
                            }
                        }).map((todo, index) => (
                            <tr key={index}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? "Completed" : "Incomplete"}</td>
                                <td onClick={() => getUser(todo)}>
                                    <div className='btn-border' >View User</div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Todo
