import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const User = () => {
    const { user, todo } = useContext(UserContext);
    return (
        <>
            <div className="user-heading">User-Detail</div>
            <div className="user-box">
                {user ? <>
                    <div className="user-content">
                        <div className="user-left">ToDo Id</div>
                        <div className="user-right">{todo.id}</div>
                    </div>
                    <div className="user-content">
                        <div className="user-left">ToDo Title</div>
                        <div className="user-right">{todo.title}</div>
                    </div>
                    <div className="user-content">
                        <div className="user-left">User Id</div>
                        <div className="user-right">{user.id}</div>
                    </div>
                    <div className="user-content">
                        <div className="user-left">Name</div>
                        <div className="user-right">{user.name}</div>
                    </div>
                    <div className="user-content">
                        <div className="user-left">Email</div>
                        <div className="user-right">{user.email}</div>
                    </div>
                </> :
                    <div>
                        User details
                    </div>}
            </div>
        </>
    )
}

export default User
