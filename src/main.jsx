import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login/Login.jsx';
import Error from './routes/Error/Error.jsx';
import Sobre from './routes/Sobre/Sobre.jsx';
import Contato from './routes/Contato/Contato.jsx';
import Home from './routes/Home/Home.jsx';


const router = createBrowserRouter([
  {path: '/', element: <App/>,
  errorElement: <Error/>,
    children:[
      {path: '/', element: <Home/>},
      {path: '/login', element: <Login/>},
      {path: '/sobre', element: <Sobre/>}, 
      {path: '/contato', element: <Contato/>}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)