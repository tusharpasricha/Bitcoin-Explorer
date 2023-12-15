import React, {useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const [error, setError] = useState('');
    const location = useLocation();
    const navigation = useNavigate();
    const [loading, setLoading] = useState(false);
    // hash-->title
    // description--->hash
    // title------>description 
    const description = location.state.title;
    const hash = location.state.description;
    const title = location.state.hash;

    const handlesignup=()=>{
        navigation('/signup',{state : {title:description ,hash:title ,description:hash}})
    
      }

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
            const response = await fetch('https://bitcoin-explorer-backend.vercel.app/api/signin', {
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
                    <div style={{paddingBottom: "15px"}} >Test email & pass are present by default</div>
                    {error && <div className='error'>{error}</div>}
                    {loading && <div className='error'>Loading...</div>}
                    <label>Email</label>
                    <input defaultValue={"tush@gmail.com"} type="email" name="email" />


                    <label>Password</label>
                    <input defaultValue={"123456"} type="password" name="password" />


                    <input type="submit" value="Login" />
                    <p className='link'>Want to <span onClick={handlesignup} >Signup</span></p>
                </form>
            </section>
        </div>
           </main >
       </div>
    );

}

export default Login;