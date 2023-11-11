import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './pages/App';
import { ErrorPage } from './pages/ErrorPage';
import { TanaPage } from './pages/TanaPage';
import { TynaPage } from './pages/TynaPage';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';

import './global.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      { path: '/about', element: <About /> },
      {
        path: 'Tanapage',
        element: <TanaPage />,
      },
      {
        path: 'Tynapage',
        element: <TynaPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
