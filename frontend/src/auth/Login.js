import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const navigation = useNavigate();
    const [loading, setLoading] = useState(false);
    const state = location.state;
    // hash-->title
    // description--->hash
    // title------>description ---->dontknowwhy
    const description = location.state.title;
    const hash = location.state.description;
    const title = location.state.hash;
    console.log("reciede"+location.state.title);

    const submitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        setError('');

        const email = e.target.email.value;
        const password = e.target.password.value;

        if(!password || !email) {
            setLoading(false);
            return setError('Some Field is empty');
        }
        else{
            const response = await fetch('http://localhost:8000/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if(!response.ok){
                console.log(data.error);
            }
            if (response.ok) {
                console.log(data);
                console.log(data.message.email);
                navigation(`/transactions/${description}/${title}/${hash}`, { state: { email: data.message.email ,isLoggedIn: true } });
            }
        }
    }

    return (
        <div className='home'>
        <main className="dashboard">
        <div className="getintouch">
            <section className='login'>
               
                <form onSubmit={submitHandler}>
                    {error && <div className='error'>{error}</div>}
                    {loading && <div className='error'>Loading...</div>}
                    <label>Email</label>
                    <input type="email" name="email" />


                    <label>Password</label>
                    <input type="password" name="password" />


                    <input type="submit" value="Login" />
                    <p className='link'>Want to signup <Link to="/signup">Signup</Link></p>
                </form>
            </section>
        </div>
           </main >
       </div>
    );

}

export default Login;