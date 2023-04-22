import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    

    const [error, setError] = useState('');
    const navigation = useNavigate();
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        setError('');

        const name = e.target.name.value;
        const password = e.target.password.value;

        if(!password || !name) {
            setLoading(false);
            return setError('Some Field is empty');
        }
        else{
            const response = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password })
            });
            const data = await response.json();
            console.log(data);
            if (data.error) {
                setError(data.error);
              } else {
                
                navigation('/', { state: { name: data.name } });
              }
        }

 

    }

    return (
        <div className='home'>
        <main className="dashboard">
        <div className="getintouch">
            <section className='login'>
                <img src="img/login.svg" alt="Logo" />
                <form onSubmit={submitHandler}>
                    {error && <div className='error'>{error}</div>}
                    {loading && <div className='error'>Loading...</div>}
                    <label>Username</label>
                    <input type="string" name="name" />


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