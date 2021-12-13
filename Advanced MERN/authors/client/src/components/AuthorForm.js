import React, {useState} from 'react';
import axios from 'axios';

const AuthorForm = (props) => {
    const {initFirstName, initLastName, onSubmitProp}= props;
    const [firstName, setFirstName] = useState(initFirstName);
    const [lastName, setLastName] = useState(initLastName);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
    }


return (
    <form onSubmit={handleSubmit}>
        <p>
            <label>First Name</label>
            <input
                type="text"
                value={firstName}
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}/>
        </p>
        <p>
            <label>Last Name</label>
            <input
                type="text"
                value={lastName}
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}/>
        </p>
        <input type = "submit" />
    </form>
    )
}

export default AuthorForm;
