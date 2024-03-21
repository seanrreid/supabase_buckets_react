import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home, { loader as homeLoader, action as homeAction } from './Home';

const Routes = () => {
    const publicRoutes = [
        {
            element: <Layout />,

            children: [
                {
                    path: '/',
                    element: <Home />,
                    action: homeAction,
                    loader: homeLoader,
                },
            ],
        },
    ];

    const router = createBrowserRouter([...publicRoutes]);

    return <RouterProvider router={router} />;
};

export default Routes;
