import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Componennt/App';

import reportWebVitals from './reportWebVitals';
import'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Home from './Componennt/Home';
// import About from './Componennt/About';
import Nav from './Componennt/Nav';
import Error from './Componennt/Error';
import  Contact from './Componennt/Contact'
import Register from './Componennt/Register';
import Login from './Componennt/Login ';
import Product from './Componennt/Product';
import ProductDetails from './Componennt/ProductDetails';
import ThemeProvider from './Context/Themecontext';

const About =React.lazy(()=>import('./Componennt/About'))



// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Nav/>

//   },
//   {
//     path:'/home',
//     element:<Home/>
//   },
//   {
//     path:'/About',
//     element:<About/>
//   }
// ])
const router =createBrowserRouter([
  {
    path:'/',
    element:<Nav/>,
    errorElement:<Error/>,


    children:[
      {
        index:'/home',
        element:<Home/>
      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/about',
        element:
        <React.Suspense>
          <About/>
        </React.Suspense>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/product',
        element:<Product/>
      },
      {
        path:'/ProductDetails/:pid',
        element:<ProductDetails/>
      },

            {
        path:'/*',
        element:<Register/>
      },
  
  
    ]
    
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
  <RouterProvider router ={router}/>
  </ThemeProvider>
  
);


reportWebVitals();
