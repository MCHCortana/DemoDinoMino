import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './pages/App';
import { Text } from './components/Text';
import { ErrorPage } from './pages/ErrorPage';
import { TanaPage } from './pages/TanaPage';
import { TynaPage } from './pages/TynaPage';

import './global.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
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
