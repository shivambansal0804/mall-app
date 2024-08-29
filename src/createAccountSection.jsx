import React, { useState } from 'react';
import './createAccount.css';  // Import the CSS file

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [consent, setConsent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form className="create-account-form" onSubmit={handleSubmit}>
            <h2>Step 1: Create an Account</h2>
            <div>
                <label>Email Address:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Confirm Email Address:</label>
                <input
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <p>Password must contain:</p>
                <ul>
                    <li>One Lowercase Character</li>
                    <li>One Uppercase Character</li>
                    <li>One Number</li>
                    <li>One Special Character</li>
                    <li>8 Characters Minimum</li>
                    <li>Passwords Match</li>
                </ul>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={consent}
                        onChange={() => setConsent(!consent)}
                        required
                    />
                    Yes, I want to become a VIP Club member and agree to the terms.
                </label>
            </div>
            <button type="submit">Create Account</button>
        </form>
    );
};

export default CreateAccount;
