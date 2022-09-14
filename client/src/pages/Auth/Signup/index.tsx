
function SingupContainer() {
    return (
        <div className="h-full w-3/5 flex flex-col justify-center items-center">
            <h1 className="mb-5 font-bold text-4xl">Create Account</h1>
            <div className="mb-3">Link container</div>
            <p className="mb-5">or use your email for registration</p>
            <input type="text" placeholder="Name" className="mb-3" />
            <input type="text" placeholder="Email" className="mb-3" />
            <input type="password" placeholder="Password" className="mb-5" />
            <button className="border-2 border-black bg-black text-white px-12 py-1.5 rounded-3xl">SIGN UP</button>
        </div>
    )
}

export default SingupContainer