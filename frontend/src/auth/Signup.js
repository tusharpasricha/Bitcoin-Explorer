import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { useParams } from "react-router-dom";


const Signup = () => {

    const [error, setError] = useState('');
    const navigation = useNavigate();
    const location = useLocation();


    // const description = location.state.title;
    // const hash = location.state.description;
    // const title = location.state.hash;
    // console.log(description)
    // console.log("reciede"+location.state.title);
    const handlelogin=()=>{
        navigation('/login',{state : {title:location.state.title ,hash:location.state.hash,description:location.state.description}})
    
      }


    const submitHandler = async (e) => {

        e.preventDefault();
        setError('');

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password_confirmation = e.target.password_confirmation.value;

        let uid;
        if(!password || !password_confirmation || !name || !email)
        {
            return setError('Some Field is Empty');
        }
        else{
            // make a POST request to sign up user
         const response = await fetch("https://bitcoin-explorer-backend.vercel.app/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name,email,password,password_confirmation }),
            });
  
            // handle response
            if (response.ok) {
                // sign-up successful, redirect to login page or do something else
                navigation('/login',{state : {title:location.state.title ,hash:location.state.hash,description:location.state.description}})
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
                    <input type="password" name="password_confirmation" />
                    <input type="submit" value="Sign up" />
                    <p className='link'>Already Have an account <span onClick={handlelogin} >Login</span></p>
                </form>
            </section>
        </div>
            </main >
        </div>
    );

}

export default Signup;