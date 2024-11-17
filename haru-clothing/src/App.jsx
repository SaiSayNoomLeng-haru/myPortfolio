import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './App.css'
import { lazy, Suspense } from 'react';

import MainLayout from './Layout/MainLayout';
import LoadingSpinner from './Utilities/LoadingSpinner';

// lazy components
const Home = lazy(() => import('./Pages/Home'));
const Shop = lazy(() => import('./Pages/Shop'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const ContatUs = lazy(() => import('./Pages/ContactUs'));
const Blog = lazy(() => import('./Pages/Blog'));
const SignIn = lazy(() => import('./Pages/SignIn'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'contact-us',
        element: <ContatUs />
      },
      { path: 'blog',
        element: <Blog />
      },
      {
        path: 'sign-in',
        element: <SignIn />
      }
    ]
  }
])

function App() {
  return (
    <>
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
    </>
  )
}

export default App
