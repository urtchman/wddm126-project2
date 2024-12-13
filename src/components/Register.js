import React, { useState, useEffect } from 'react';
import '../assets/css/auth.css'; 
import countriesData from "../assets/data/countries.json"; // Adjust path based on your project structure


const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    });

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch countries on component mount
        const fetchCountries = async () => {
            try {
                setCountries(countriesData);
            } catch (error) {
                console.error("Error loading countries:", error);
            }
        };

        fetchCountries();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            const {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            } = formData;

            if (
                firstName &&
                lastName &&
                email &&
                password &&
                password === confirmPassword
            ) {
                alert('Signup successful! Welcome to our platform.');
            } else {
                alert('Signup failed! Please fill in all fields and make sure passwords match.');
            }

            setFormData({
                firstName: '',
                lastName: '',
                gender: '',
                phone: '',
                email: '',
                country: '',
                city: '',
                password: '',
                confirmPassword: '',
                acceptTerms: false,
            });
        }, 2000);
    };

    return (
        <main>
            <section className="signup-section">
                <h2>Sign Up</h2>
                <form id="signupForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select Country
                            </option>
                            {countries.map((country) => (
                                <option key={country.alpha3Code} value={country.alpha3Code}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                                required
                            />
                            I accept the terms and conditions
                        </label>
                    </div>

                    <button type="submit" className="btn-submit">
                        Sign Up
                    </button>

                    <div className="additional-links">
                        <a href="/account/login" className="create-account">
                            Have an account? Login
                        </a>
                    </div>
                </form>

                {loading && (
                    <div id="loaderModal" className="modal" style={{ display: 'block' }}>
                        <div className="modal-content">
                            <div className="loader"></div>
                            <p>Signing you up...</p>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
};

export default Register;
