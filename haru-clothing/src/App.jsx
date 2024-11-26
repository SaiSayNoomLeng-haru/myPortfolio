import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './App.css'
import { lazy, Suspense, useEffect } from 'react';
import './server.js'

import MainLayout from './Layout/MainLayout';
import LoadingSpinner from './Utilities Components/LoadingSpinner.jsx';

// lazy components
const Home = lazy(() => import('./Pages/Home'));
const Shop = lazy(() => import('./Pages/Shop'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const ContatUs = lazy(() => import('./Pages/ContactUs'));
const Blog = lazy(() => import('./Pages/Blog'));
const SignIn = lazy(() => import('./Pages/SignIn'));
const WishList = lazy(() => import('./Pages/WishList'));
const Cart = lazy(() => import('./Pages/Cart'));
const Career = lazy(() => import('./Pages/Career'));
const Error = lazy(() => import('./Pages/ErrorPage'));
const ComingSoon = lazy(() => import('./Pages/ComingSoon'));
const Faq = lazy(() => import('./Pages/Faq.jsx'));

// loaders
import { loader as homepageLoader} from './Pages/Home';
import { loader as shopPageLoader } from './Pages/Shop';
import { loader as aboutUsPageLoader } from './Pages/AboutUs';
import { loader as faqPageLoader } from './Pages/Faq.jsx';

// faq components
import Payment from './FAQs/Payment.jsx';
import Order from './FAQs/Order.jsx';
import Account from './FAQs/Account.jsx';
import Return from './FAQs/Return.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: homepageLoader
      },
      {
        path: 'shop',
        element: <Shop />,
        loader: shopPageLoader
      },
      {
        path: 'about-us',
        element: <AboutUs />,
        loader: aboutUsPageLoader
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
      },
      {
        path: 'wishlist',
        element: <WishList />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'career',
        element: <Career />
      },
      {
        path: 'coming-soon',
        element: <ComingSoon />
      },
      {
        path: 'faq',
        element: <Faq />,
        loader: faqPageLoader,
        children: [
          {
            index: true,
            element: <Order />
          },
          {
            path: 'return-order',
            element: <Return />
          },
          {
            path: 'payment',
            element: <Payment />
          },
          {
            path: 'account',
            element: <Account />
          }
        ]
      },
      {
        path: '*',
        element: <Error />
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
