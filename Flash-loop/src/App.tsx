import { createHashRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import AddWord from './page/AddWord';
import ReviewWords from './page/ReviewWords';
import Layout from './Layout/Layout';
import './App.css'
import Home from './page/Home';
import Theme from './page/Theme';
import Achievement from './page/Achievement';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Not found this page...</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/add", element: <AddWord /> },
      { path: "/review", element: <ReviewWords /> },
      { path: "/theme", element: <Theme /> },
      { path: "/achievement", element: <Achievement /> },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
