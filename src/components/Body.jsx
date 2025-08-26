import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter,RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import TrailerBackground from "./TrailerBackground";
 

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
        },
        {
            path:"/browser/trailer",
            element: <TrailerBackground/>
        }
    ]);


    return(
       <div>
        <RouterProvider router={appRouter}/>
       </div>
    )
};

export default Body;

