import React from 'react'
import '@/styles/login.css'

function LoginPage() {
  return (
    <div className="container">
	<div className="sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><i className="fa-brands fa-facebook"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
  )
}

export default LoginPage