import { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
    const [user, setUser] = useState({
        UserName: "",
        Email: "",
        Phone: "",
        Password: ""
    });
    const navigate = useNavigate()
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    // Handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            // Submit the form data to the server or handle registration logic
            console.log("Form submitted:", user);
            const response = await fetch(`http://localhost:5000/api/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user) // Send user data in the request body
            });

            if (response.ok) {
              setUser({UserName: "", Password: "", Email: "", Phone: ""})
              navigate("/login")
            }

            const data = await response.json();
            console.log(JSON.stringify(data));
            // Handle response data as needed
        } catch (error) {
            console.error('register', error);
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="Section-registration">
                        <div className="registration-form">
                            <h1 className="main-heading">Registration</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="UserName">Username</label>
                                <input
                                    type="text"
                                    name="UserName"
                                    placeholder="Username"
                                    id="UserName"
                                    required
                                    autoComplete="off"
                                    value={user.UserName}
                                    onChange={handleInput}
                                />
                                <label htmlFor="Email">Email</label>
                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Email"
                                    id="Email"
                                    required
                                    autoComplete="off"
                                    value={user.Email}
                                    onChange={handleInput}
                                />
                                <label htmlFor="Phone">Phone</label>
                                <input
                                    type="text"
                                    name="Phone"
                                    placeholder="Phone"
                                    id="Phone"
                                    required
                                    autoComplete="off"
                                    value={user.Phone}
                                    onChange={handleInput}
                                />
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    name="Password"
                                    placeholder="Password"
                                    id="Password"
                                    required
                                    autoComplete="off"
                                    value={user.Password}
                                    onChange={handleInput}
                                />
                                <button type="submit" className="registration-button">Register</button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default Registration;
