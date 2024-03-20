import { useState } from "react";
import "./login.css"

export const Login = () => {
    // used to store fields in user also ask ali to explain
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    // handling the input values
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    
    return (
        <>
            <section>
                {/* creating login page. selected div and container */}
                <main>
                    {/* main section of the page */}
                    <div className="Section-login">
                        {/* container to add image */}
                        <div className="Login-grid">
                        <div className="login-form">
                            <h1 className="main-heading">Login</h1>
                            {/* main form */}
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                id="username"
                                required
                                autoComplete="off"
                                value={user.username}
                                onChange={handleInput}
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                id="password"
                                required
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                            />
                        </div>
                        <button type="submit" className="loginbutton">Login</button>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};
export default Login;