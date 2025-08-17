import Header from "./Header";
import { useState } from "react";

const Login =()=>{
    const [signIn, setSignIn] = useState(false);

    const handleClick =()=>{
        setSignIn(!signIn);
    }

    return(
        <div className="relative  bg-gradient-to-br from-black ">
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/LK-en-20250721-TRIFECTA-perspective_0f9c2293-736d-4443-83ff-90ae2fbf1a7d_large.jpg"
                 alt="image"/>
            </div>
            <form className="bg-black absolute rounded-lg m-auto right-0 left-0 w-3/12 p-10 text-start my-50 text-white opacity-85">
                {signIn ?<h1 className="text-3xl font-bold my-4">Sign Up</h1>:
                 <h1 className="text-3xl font-bold my-4">Sign In</h1>
                }
                {signIn &&  
                <input
                 type="UserName"
                 placeholder="UserName"
                 className="px-4 py-2 my-4 bg-gray-700 w-full font-medium"
                />
                }
                <input
                 type="email"
                 placeholder="Email"
                 className="px-4 py-2 my-4 bg-gray-700 w-full font-medium"
                 />
                <input
                 type="password"
                 placeholder="password"
                 className="px-4 py-2 my-4 bg-gray-700 w-full font-medium"
                />
                <div className="px-4 py-4 mb-5 my-6 text-center bg-red-600 w-full rounded-lg font-bold">
                    <button>Submit</button>
                </div>
                { signIn ? <h1 onClick={handleClick} className="cursor-pointer">Go to the Sign In</h1>:
                 <h1 onClick={handleClick} className="cursor-pointer">new to Netflix? Sign Up</h1>
                }
            </form>
        </div>
    )
};

export default Login;