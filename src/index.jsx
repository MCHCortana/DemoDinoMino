import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Text } from './Components/Text';
import { ErrorPage } from './pages/ErrorPage';
import { TanaPage } from './pages/TanaPage';
import { TynaPage } from './pages/TynaPage';

import './global.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <HomePage />,
    children: [
      {
        path: 'text',
        element: <Text />,
      },

      {
        path: 'Tanapage',
        element: <TanaPage />,
      },
      {
        path: 'Tynapage',
        element: <TynaPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
