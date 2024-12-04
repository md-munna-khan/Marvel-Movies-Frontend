import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './layouts/AuthProvider';
import Error from './components/Error';
import AddMovie from './movies/AddMovies';
import AddMovies from './movies/AddMovies';
import MyFavorite from './movies/MyFavorites';
import PrivateRoute from './layouts/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/movies',
        element:<PrivateRoute><AddMovies></AddMovies></PrivateRoute>
      },
      {
        path:'/favorites',
        element:<PrivateRoute><MyFavorite></MyFavorite></PrivateRoute>
      },
    
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </StrictMode>,
)
