import { useNavigate } from "react-router-dom";
import SingupContainer from "./Signup";
import SignupRedirect from "./SignupRedirect";
import LoginRedirect from "./LoginRedirect";
import LoginContainer from "./Login";
import { useState } from "react";

function Auth() {
    const navigate = useNavigate();
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    function handleLogin(): void {
        navigate('/dashboard');
    }

    function handleAuthSwitch(): void {
        setIsLoggingIn(!isLoggingIn)
    }

    return (
        <div className="h-screen w-screen grid place-items-center">
            <div className="bg-blue-300 w-3/5 h-3/4 flex">
                {isLoggingIn 
                ? <><LoginContainer handleLogin={handleLogin} /><SignupRedirect handleAuthSwitch={handleAuthSwitch} /></> 
                : <><LoginRedirect handleAuthSwitch={handleAuthSwitch} /><SingupContainer /> </>}

            </div>
        </div>
    )
}

export default Auth;