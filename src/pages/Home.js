import React from 'react';
import Todo from '../components/Todo';
import User from '../components/User';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="todo-container">
                <Todo />
            </div>
            <div className="user-container">
                <User />
            </div>
        </div>
    )
}

export default Home
