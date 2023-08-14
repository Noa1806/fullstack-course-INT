import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App.tsx'
import ErrorPage from "./pages/errorPage.tsx";
import LoginPage from "./pages/loginPage.tsx";
import RegisterPage from './pages/registerPage.tsx';
import ExpensesPage from './pages/expensesPage.tsx';
import GuestsPage from './pages/guestsPage.tsx';
import MainPage from './pages/mainPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/expenses",
    element: <ExpensesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/guests",
    element: <GuestsPage />,
    errorElement: <ErrorPage />,
  }
  ,
  {
    path: "/main",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
