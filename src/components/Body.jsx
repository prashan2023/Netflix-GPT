import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter,RouterProvider } from "react-router";

const Body =()=>{
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

    return(
       <div>
        <RouterProvider router={appRouter}/>
       </div>
    )
};

export default Body;

