import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx';
import Error from './routes/Error.jsx';
import Sobre from './routes/sobre.jsx';
import Contato from './routes/Contato.jsx';


const router = createBrowserRouter([
  {path: '/', element: <App/>,
  errorElement: <Error/>,
    children:[
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