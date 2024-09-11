function DisplayComponent({ username, onLogout }) {
    return (
        <div className="display-div">
            <h2 className="title">Welcome, {username}!</h2>
            <p className="user-message">You've successfully logged in.</p>
            {onLogout && (
                <button className='btn btn-logout' onClick={onLogout}>
                    Logout
                </button>
            )}
        </div>
    );
};


export default DisplayComponent