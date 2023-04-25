import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";


const Signup = () => {

    const [error, setError] = useState('');
    const navigation = useNavigate();
    


    const submitHandler = async (e) => {

        e.preventDefault();
        setError('');

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        let uid;
        if(!password || !confirmPassword || !name || !email)
        {
            return setError('Some Field is Empty');
        }
        else{
            // make a POST request to sign up user
         const response = await fetch("http://localhost:5000/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name,  email,password }),
            });
  
            // handle response
            if (response.ok) {
                // sign-up successful, redirect to login page or do something else
                navigation("/")
                console.log("Sign up successful");
                alert("Sign Up Successful, Now you can LOGIN")
            } else {
                // sign-up failed, display error message
                console.log("Sign up failed");
            }
        }
        
        

    }

    return (
        

        <div className='home'>
        <main className="dashboard">
        <div className='getintouch' >
            
            <section className='login'>
                
                <form onSubmit={submitHandler}>
                    {error && <div className='error'>{error}</div>}
                    <label>Name</label>
                    <input type="text" name="name" />

                    <label>Email</label>
                    <input type="email" name="email" />

                    <label>Password</label>
                    <input type="password" name="password" />

                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" />
                    <input type="submit" value="Sign up" />
                    <p className='link'>Already Have an account <Link to="/login">Login</Link></p>
                </form>
            </section>
        </div>
            </main >
        </div>
    );

}

export default Signup;