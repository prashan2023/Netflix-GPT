import Header from "./Header";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useState,useRef } from "react";
import  { CheckValidate1,CheckValidate2 }from "../utils/Validate";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, USER_LOGO } from "../utils/constant";

const Login =()=>{
    const dispatch = useDispatch();
    const [signIn, setSignIn] = useState(false);
    const [errorMessage,setErrorMessage] = useState(null);
    // const userName = useRef(null);
    const userName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleClick =()=>{
        setSignIn(!signIn);
        setErrorMessage(null)
    };

    const handleButtonClick =()=>{
        if(! signIn){
            const message1 = CheckValidate1(email.current.value,password.current.value);
            setErrorMessage(message1);
            if(message1) return;

             
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            updateProfile(auth.currentUser, {
            displayName: "prashan", photoURL: USER_LOGO
            }).then(() => {
               
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName:displayName,photoURL:photoURL  }));
              const user = auth.currentUser;
            // ...
            }).catch((error) => {
            // An error occurred
            // ...
           });

           
            })
            .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode+ " : " +errorMessage);
            });
            
        }
        
        else if(userName.current.value == ""){
            setErrorMessage("UserName can not be Empty");
        }
        else if(userName.current.value || signIn){
            const message2 = CheckValidate2(userName.current.value,email.current.value,password.current.value);
            setErrorMessage(message2);
            
            if(message2) return;
        
 
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
            displayName: userName.current.value, photoURL: USER_AVATAR
            }).then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName:displayName,photoURL:photoURL  }));
              
             
              console.log(auth.currentUser)
            // ...
            }).catch((error) => {
               setErrorMessage(error.message);
            });

            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setErrorMessage(errorCode+ " : " +errorMessage);
            // ..
            });
        }  
    
    };

    return(
        <div className="relative bg-gradient-to-br from-black ">
            <Header/>
            <div className="absolute">
                <img className="fixed w-screen h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/LK-en-20250721-TRIFECTA-perspective_0f9c2293-736d-4443-83ff-90ae2fbf1a7d_large.jpg"
                 alt="image"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="bg-black absolute rounded-lg m-auto right-0 left-0 w-full md:w-3/12 p-15 md:p-10 text-start my-45 md:my-40 text-white opacity-85">
                {signIn ?<h1 className="text-xl md:text-3xl font-bold my-4">Sign Up</h1>:
                 <h1 className="text-3xl font-bold my-4">Sign In</h1>
                }
                {/* <h1 className="text-3xl font-bold my-4">{signIn ? "Sign Up": "Sign In"}</h1> */}
                {signIn &&  
                <input
                 ref={userName}
                 type="UserName"
                 placeholder="UserName"
                 className="px-4 py-2 my-4 bg-gray-700 w-2/3 md:w-full font-medium"
                />
                }
                <input
                 ref={email}
                 type="email"
                 placeholder="Email"
                 className="px-4 py-2 my-4 bg-gray-700 w-full font-medium"
                 />
                <input
                 ref={password}
                 type="password"
                 placeholder="password"
                 className="px-4 py-2 my-4 bg-gray-700 w-full font-medium"
                />
                <p className="text-red-600">{errorMessage}</p>
                <div onClick={handleButtonClick} className="px-4 py-3 mb-5 my-6 text-center bg-red-600 w-full rounded-lg font-bold">
                    <button >{signIn ? "Sign Up": "Sign In"}</button>
                </div>
                <h1 onClick={handleClick} className="cursor-pointer"> { signIn ? "Already register? Sign In now.":"New to Netflix? Sign Up now."}</h1>
            </form>
        
        </div>
    )
};

export default Login;