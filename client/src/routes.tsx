import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePages from "./pages/home";



const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element:<HomePages></HomePages>
            }
        ]
    }
])


export default appRouter