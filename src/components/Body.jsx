import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter,RouterProvider } from "react-router";
import { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body =()=>{
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browser",
            element: <Browser/>
        }
    ]);

    useEffect(() =>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName} = user;
            dispatch(addUser({uid: uid, email: email, displayName:displayName  }));
        } else {
            dispatch(removeUser());
         }
        });
    },[]);

    return(
       <div>
        <RouterProvider router={appRouter}/>
       </div>
    )
};

export default Body;

