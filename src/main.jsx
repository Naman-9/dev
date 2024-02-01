import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './app/store.js'
import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import SignInPage from './pages/SignInPage.jsx'


const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/signin",
    element: <SignInPage />
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
