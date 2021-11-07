import React, {useState} from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handlefirstNameChange = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 3) {
            setFirstNameError('First name must be at least 3 characters');
        } else {
            setFirstNameError('');
        }
    }

    const handlelastNameChange = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 3) {
            setLastNameError('Last name must be at least 3 characters');
        } else {
            setLastNameError('');
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!e.target.value.includes('@') && !e.target.value.length < 3) {
            setEmailError('Email must contain @');
        } else {
            setEmailError('');
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError('Password must be at least 6 characters');
        } else {
            setPasswordError('');
        }
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError('Password must match');
        } else {
            setConfirmPasswordError('');
        }
    }

    return (
        <form onSubmit={ (e)=> e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" className="form-control" id="firstName" aria-describedby="firstNameHelp" placeholder="Enter first name" value={firstName} onChange={handlefirstNameChange}/>
                    <div>
                        {firstNameError && <small id="firstNameHelp" className="form-text text-danger">{firstNameError}</small>}
                    </div>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" className="form-control" id="lastName" aria-describedby="lastNameHelp" placeholder="Enter last name" value={lastName} onChange={handlelastNameChange}/>
                    <div>
                        {lastNameError && <small id="lastNameHelp" className="form-text text-danger">{lastNameError}</small>}
                    </div>    
            </div>  
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
                    <div>
                        {emailError && <small id="emailHelp" className="form-text text-danger">{emailError}</small>}
                    </div>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Enter password" value={password} onChange={handlePasswordChange}/>
                    <div>
                        {passwordError && <small id="passwordHelp" className="form-text text-danger">{passwordError}</small>}
                    </div>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" className="form-control" id="confirmPassword" aria-describedby="confirmPasswordHelp" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                    <div>
                        {confirmPasswordError && <small id="confirmPasswordHelp" className="form-text text-danger">{confirmPasswordError}</small>}
                    </div>
            </div>
            
        </form>
    );
}

export default Form;