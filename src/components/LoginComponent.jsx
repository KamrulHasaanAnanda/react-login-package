import React, { useState } from 'react'

function LoginComponent({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsernameError('');
        setPasswordError('');

        if (!username) setUsernameError('Please enter a username');
        if (!password) setPasswordError('Please enter a password');

        if (username && password) {
            onLogin(username);
        }
    };

    return (
        <div className='login-div'>
            <h2 className='title'>Login</h2>
            <form className='form-Login' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {usernameError && <p className='error-p'>{usernameError}</p>}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className='error-p'>{passwordError}</p>}
                <button className='btn-login' type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginComponent;
