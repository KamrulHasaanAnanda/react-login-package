# 🔐 react-login-component

A robust and reusable React login component with simulated authentication.

## 🌟 Overview

`react-login-component` is a professionally crafted, customizable React component designed for seamless user authentication integration. It offers a clean, user-friendly interface with built-in form validation and flexible styling options.

## ✨ Features

- 🚀 **Effortless Integration**: Easily incorporate the `LoginComponent` into any React application.
- ✅ **Form Validation**: Implements robust field validation for username and password inputs.
- 🎨 **Customizable Styling**: Fully customizable appearance through CSS classes.
- 🔗 **Flexible Authentication**: Connects smoothly with various authentication systems via the `onLogin` prop.
- 👤 **User Display**: Includes a `DisplayComponent` for presenting logged-in user information.

## 📦 Installation
bash
npm install @kamrulhassan2015/react-login-component

or

yarn add @kamrulhassan2015/react-login-component


## 🚀 Usage

import React, { useState } from 'react';
import { LoginComponent, DisplayComponent } from '@kamrulhassan2015/react-login-component';
const App = () => {
const [loggedInUser, setLoggedInUser] = useState(null);
const handleLogin = (username) => {
setLoggedInUser(username);
};
const handleLogout = () => {
setLoggedInUser(null);
};
return (
<div>
{loggedInUser ? (
    <DisplayComponent username={loggedInUser} onLogout={handleLogout} />
) : (
<LoginComponent onLogin={handleLogin} />
)}
</div>
);
};
export default App;


## 🧩 Components

### 🔑 LoginComponent

The primary component for managing user authentication.

**Props:**
- `onLogin`: Function called upon successful login, receives the username as an argument.

### 👤 DisplayComponent

A component for rendering logged-in user information and logout functionality.

**Props:**
- `username`: The username of the authenticated user.
- `onLogout`: Function called when the user initiates logout.

## 🛠️ Development

bash
git clone https://github.com/yourusername/react-login-component.git
cd react-login-component
npm install

## 👨‍💻 Author

Kamrul Hassan Ananda

## 🏷️ Keywords

react, login, component, authentication, form

## 📄 License

MIT