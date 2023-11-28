

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/home";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element:<HomePage></HomePage>
            }
        ]
    }
])


export default appRouter