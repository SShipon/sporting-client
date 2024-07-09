import MainLayout from "@/components/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";

export const router  = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
        children:[
            {

            }
        ]
    }
])