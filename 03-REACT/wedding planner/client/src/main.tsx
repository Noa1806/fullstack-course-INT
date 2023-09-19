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
import AddExpensesPage from './pages/addExpensesPage.tsx';
import AddGuestsPage from './pages/addGuestsPage.tsx';
import ExpensesPage from './pages/expensesPage.tsx';
import GuestsPage from './pages/guestsPage.tsx';
import ProfilePage from './pages/profilePage.tsx';
import AboutUsPage from './pages/aboutUsPage.tsx';
import CataloguePage from './pages/cataloguePage.tsx';

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
  },
  {
    path: "/addExpenses",
    element: <AddExpensesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/addGuests",
    element: <AddGuestsPage />,
    errorElement: <ErrorPage />,
  }
  ,
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  }
  ,
  {
    path: "/about",
    element: <AboutUsPage />,
    errorElement: <ErrorPage />,
  }
  ,
  {
    path: "/catalogue",
    element: <CataloguePage />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
