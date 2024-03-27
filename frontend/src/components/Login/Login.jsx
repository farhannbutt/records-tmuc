// Login component
import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [user, setUser] = useState({
        UserName: "",
        Password: ""
    });
    const navigate = useNavigate();
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            console.log("login form", response)

            if (response.ok) {
                setUser({UserName:"", Password:""})
                setUser(user);
                navigate("/");
            } else {
                alert("invalid credentials")
                console.log("invalid credentials")
                // navigate("/");
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };
    
    return (
        <>
            <section>
                <main>
                    <div className="Section-login">
                        <div className="Login-grid">
                            <div className="login-form">
                                <h1 className="main-heading">Login</h1>
                                <label htmlFor="UserName">UserName</label>
                                <input
                                    type="text"
                                    name="UserName"
                                    placeholder="UserName"
                                    id="UserName"
                                    required
                                    autoComplete="off"
                                    value={user.UserName}
                                    onChange={handleInput}
                                />
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="Password"
                                    name="Password"
                                    placeholder="Password"
                                    id="Password"
                                    required
                                    autoComplete="off"
                                    value={user.Password}
                                    onChange={handleInput}
                                />
                                <button type="submit" className="loginbutton" onClick={handleSubmit}>Login</button>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            {/* Link to registration page */}
            <div className="not-registered">
                <p>Not registered? <a href="/registration">Register here</a></p>
            </div>
        </>
    );
};
export default Login;
