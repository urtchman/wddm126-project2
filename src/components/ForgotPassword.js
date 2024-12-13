import React, { useState } from 'react';
import '../assets/css/auth.css'; // Create or link a CSS file for styling

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            if (!email) {
                alert('Enter a valid email');
            } else {
                alert('Password recovery link has been sent to your email!');
            }

            setEmail('');
        }, 2000);
    };

    return (
        <main>
            <section className="signup-section">
                <h2>Forgot Password</h2>
                <form id="forgotForm" onSubmit={handleSubmit}>
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

                    <button type="submit" className="btn-submit">
                        Recover
                    </button>

                    <div className="additional-links"></div>
                </form>

                {loading && (
                    <div id="loaderModal" className="modal" style={{ display: 'block' }}>
                        <div className="modal-content">
                            <div className="loader"></div>
                            <p>Recovering your password...</p>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default ForgotPassword;
