function Login() {
    return (
        <div className="h-screen w-screen grid place-items-center">
            <div className="bg-blue-300 w-3/5 h-3/4 flex">
                <div className="bg-blue-400 w-2/5 h-full flex flex-col items-center justify-center">
                    <h2 className="mb-5 font-bold text-3xl">Welcome Back!</h2>
                    <p className="mb-5 mx-10 text-center">To keep connected with us, please login with your personal info</p>
                    <button className="border-2 border-black px-12 py-1.5 rounded-3xl">
                        SIGN IN
                    </button>
                </div>
                <div className="h-full w-3/5 flex flex-col justify-center items-center">
                    <h1 className="mb-5 font-bold text-4xl">Create Account</h1>
                    <div className="mb-3">Link container</div>
                    <p className="mb-5">or use your email for registration</p>
                    <input type="text" placeholder="Name" className="mb-3" />
                    <input type="text" placeholder="Email" className="mb-3" />
                    <input type="password" placeholder="Password" className="mb-5" />
                    <button className="border-2 border-black bg-black text-white px-12 py-1.5 rounded-3xl">SIGN UP</button>
                </div>
            </div>
        </div>
    )
}

export default Login;