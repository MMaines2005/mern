import React, {userReducer, useState} from 'react';

const Formval = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    

const initialState = {
    firstName:{ value: '', error: null },
    lastName:{ value: '', error: null },
    email:{ value: '', error: null },
};
return (    
    <>
    <div>
        {initialState.firstName.error && <p>{initialState.firstName.error}</p>}
    </div>
    <div>
            {initialState.lastName.error && <p>{initialState.lastName.error}</p>}
    </div>
    <div>
            {initialState.email.error && <p>{initialState.email.error}</p>}
    </div>

    <form>
            <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" 
            onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            </form>

            <div>
        <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
        <p>
          <label>First Name: </label>{ firstName }
        </p>
        <p>
          <label>Last Name: </label>{ lastName }
        </p>
        <p>
          <label>Email: </label>{ email }
        </p>
        
      </div>
    </>
);

}
export default Formval;