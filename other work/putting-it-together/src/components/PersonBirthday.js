import React, {useState} from 'react';

const PersonBirthday = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [birthday, setBirthday] = useState({
        birthdayCount: age
    });
    const clickHandler = () => {
        setBirthday({
            birthdayCount: birthday.birthdayCount + 1
        });
    };
          
    return (
        <div>
            <h2> {lastName}, {firstName} </h2>
            <p> Age: {birthday.birthdayCount} </p>
            <p> Hair Color: {hairColor} </p>
            <button onClick={clickHandler}> Birthday Button for {firstName} </button>
        </div>

    );
};

export default PersonBirthday;