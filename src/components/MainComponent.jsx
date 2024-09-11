import React, { useState } from 'react'
import DisplayComponent from './DisplayComponent';
import LoginComponent from './LoginComponent';


function MainComponent() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (username) => {
        setLoggedInUser(username);
    };

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    return (
        <div className="app-container">
            {/* <main className="app-main"> */}
            {loggedInUser ? (
                <DisplayComponent username={loggedInUser} onLogout={handleLogout} />
            ) : (
                <LoginComponent onLogin={handleLogin} />
            )}


        </div>
    )
}

export default MainComponent