import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [todo, setTodo] = useState();
    return (
        <UserContext.Provider value={{ user, setUser, todo, setTodo }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;