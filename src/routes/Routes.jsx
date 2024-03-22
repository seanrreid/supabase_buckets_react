import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home, { loader as homeLoader, action as homeAction } from './Home';
import Register, { action as registerAction } from './Register';
import Login, { action as loginAction } from './Login';

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
                {
                    path: '/register',
                    element: <Register />,
                    action: registerAction,
                },
                {
                    path: '/login',
                    element: <Login />,
                    action: loginAction,
                },
            ],
        },
    ];

    const router = createBrowserRouter([...publicRoutes]);

    return <RouterProvider router={router} />;
};

export default Routes;
