import React, { useState } from 'react'

const useUser = () => {

    const getUser = () => {
        const userString = localStorage.getItem('user');
        const userUser = JSON.parse(userString);
        return userUser?.user
    }
    
    const [user, setUser] = useState(getUser());
    
    const saveUser = userUser => {
        localStorage.setItem('user', JSON.stringify(userUser));
        setuser(userUser.user);
    }

    return {
        setUser: saveUser,
        user
    }
}

export default useUser
