import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        mobile: '',
        semester: '',
        gender: '',
        message: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            storeDataInLocalStorage(formData);
        }
    };

    const validateForm = () => {
        const { Name, email, password, confirmPassword, agreeTerms } = formData;
        if (!Name || !email || !password || !confirmPassword || !agreeTerms) {
            alert('Please fill in all required fields and agree to the terms.');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match.');
            return false;
        }

        return true;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const storeDataInLocalStorage = (data) => {
        localStorage.setItem('registrationFormData', JSON.stringify(data));
        alert('Registration Successful! Data Stored in LocalStorage.');
    };

    return (
        <center>
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
                <label>Name : </label>
                <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div> <br/>
            <div>
                <label>Email : </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div> <br/> 
            <div>
                <label>Mobile : </label>
                <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div> <br/>
            <div>
                <label>Semester : </label>
                <select name="semester" value={formData.semester} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="1">1st Semester</option>
                    <option value="2">2nd Semester</option>
                    <option value="3">3rd Semester</option>
                    <option value="4">4th Semester</option>
                </select>
            </div> <br/>
            <div>
                <label>Gender : </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        required
                    />{' '}
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        required
                    />{' '}
                    Female
                </label>
            </div> <br/>
            <div>
                <label>Message : </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div> <br/>
            <div>
                <label>Password : </label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div> <br/>
            <div>
                <label>Confirm Password : </label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div> <br/>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                    />{' '}
                    I agree to the Terms and Conditions.
                </label>
            </div> <br/>
            <Button variant="warning" type="submit">Register</Button>
        </form>
        </center>
    );
};

export default RegistrationForm;