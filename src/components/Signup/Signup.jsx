import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleSignUp  = event =>{
        setError('');
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value; 
        const confirm = form.confirm.value;

        console.log(email,password,confirm)

        if(password != confirm){
            setError('Password doesnot match please try again !')
            return;
        }
        else if(password.length<6){
            setError('Your password must be atleast in 6 characters')
            return;
        }
        createUser(email,password)
        .then(result=>{
            const theUser = result.user
            console.log(theUser)
            form.reset();
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp} className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" required/>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id=""required />
                <p className='error-msg'>{error}</p>
                <button className='login-btn'>Sign up</button>
            </form>
            
            <p className='toogle-singup'>Already have an account? <Link to='/login'> Login</Link> </p>
            
        </div>
    );
};

export default Signup;