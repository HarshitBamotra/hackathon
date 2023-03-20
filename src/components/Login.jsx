import React from 'react';
// import NavBar from './Nav';
import './login.css';

function Login(){
    
    let sup = () => {
        const container = document.getElementById('container');
        container.classList.add("right-panel-active");
        
    }
    let sin = () => {
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active");
    }

    return (
        <div>
            
            <div className='logBar'>
                <div className='logLogoElement'>HANGRY</div>
                <a className='logLoginElement' href='/login'>
                    Log in/ Sign up
                </a>
            </div>


            <div className='wrapper'>
                <div className='container' id='container'>
                    <div className='formContainer signupContainer'>
                        <form action="">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="facebook.com" className="social"><i className="fa fa-facebook"></i></a>
                                <a href="google.com" className="social"><i className="fa fa-google"></i></a>
                                <a href="linkedin.com" className="social"><i className="fa fa-linkedin"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <button >SignUp</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign In</h1>
                            <div className="social-container">
                                <a href="facebook.com" className="social"><i className="fa fa-facebook"></i></a>
                                <a href="google.com" className="social"><i className="fa fa-google"></i></a>
                                <a href="linkedin.com" className="social"><i className="fa fa-linkedin"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <a href="forgor.com">Forgot Your Password</a>
                            <button name="login" >Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={sin}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={sup}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;