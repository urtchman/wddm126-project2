import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/auth.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();

        // Show loader modal
        setLoading(true);

        // Simulate login delay
        setTimeout(() => {
            setLoading(false); // Hide loader modal

            if (email && password) {
                alert("Login successful!");
            } else {
                alert("Login failed! Please enter valid credentials.");
            }

            // Optionally, clear the form fields
            setEmail('');
            setPassword('');
        }, 2000); // 2-second delay
    };

    return (
        <main>
            <section className="signup-section">
                <h2>Sign In</h2>
                <form id="signinForm" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-submit">Login</button>

                    {/* Forgot Password and Sign Up Links */}
                    <div className="additional-links">
                        <Link to="/account/forgotpassword">Forgot Password?</Link> 
                        <span> | </span>
                        <Link to="/account/signup">Don't have an account? Register</Link> 
                    </div>
                </form>

                {/* Loader Modal */}
                {loading && (
                    <div id="loaderModal" className="modal" style={{ display: 'block' }}>
                        <div className="modal-content">
                            <div className="loader"></div>
                            <p>Logging you in...</p>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default Login;
