import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './App.css'
import { createContext, lazy, Suspense, useState } from 'react';
import './server.js'

import MainLayout from './Layout/MainLayout';
import LoadingSpinner from './Utilities Components/LoadingSpinner.jsx';
import ErrorComponent from './Components/ErrorComponent.jsx';
import ProductDetail from './Pages/ProductDetail.jsx';
import OrderCompleted from './Pages/OrderCompleted.jsx';

// lazy components
const Home = lazy(() => import('./Pages/Home'));
const Shop = lazy(() => import('./Pages/Shop'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const ContatUs = lazy(() => import('./Pages/ContactUs'));
const Blog = lazy(() => import('./Pages/Blog'));
const SignIn = lazy(() => import('./Pages/SignIn'));
const WishList = lazy(() => import('./Pages/WishList'));
const CartPage = lazy(() => import('./Pages/CartPage'));
const Error = lazy(() => import('./Pages/ErrorPage'));
const ComingSoon = lazy(() => import('./Pages/ComingSoon'));
const Faq = lazy(() => import('./Pages/Faq.jsx'));
const BlogDetail = lazy(() => import('./Pages/BlogDetail.jsx'))
const Description = lazy(() => import('./Product-Details/Description.jsx'))
const AdditionalInformation = lazy(() => import('./Product-Details/AdditionalInformation.jsx'))
const SignUp = lazy(() => import('./Pages/SignUp.jsx'))


// loaders
import { loader as homepageLoader} from './Pages/Home';
import { loader as shopPageLoader } from './Pages/Shop';
import { loader as aboutUsPageLoader } from './Pages/AboutUs';
import { loader as faqPageLoader } from './Pages/Faq.jsx';
import { loader as PDPageLoader } from './Pages/ProductDetail'
import { loader as blogDetailPageLoader } from './Pages/BlogDetail.jsx'
import { loader as blogPageLoader } from './Pages/Blog.jsx'

// faq components
import Payment from './FAQs/Payment.jsx';
import Order from './FAQs/Order.jsx';
import Account from './FAQs/Account.jsx';
import Return from './FAQs/Return.jsx'

const AppContext = createContext();

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: homepageLoader,
        errorElement: <ErrorComponent />
      },
      {
        path: 'products',
        element: <Shop />,
        loader: shopPageLoader,
        errorElement: <ErrorComponent />
      },
      {
        path: 'about-us',
        element: <AboutUs />,
        loader: aboutUsPageLoader,
        errorElement: <ErrorComponent />
      },
      {
        path: 'contact-us',
        element: <ContatUs />
      },
      { path: 'blogs',
        element: <Blog />,
        loader: blogPageLoader,
        errorElement: <ErrorComponent />
      },
      {
        path: 'blogs/:id',
        element: <BlogDetail />,
        loader: blogDetailPageLoader,
        errorElement: <ErrorComponent />
      },
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      },
      {
        path: 'wishlist',
        element: <WishList />
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'order-completed',
        element: <OrderCompleted />
      },
      {
        path: 'coming-soon',
        element: <ComingSoon />
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
        loader: PDPageLoader,
        errorElement: <ErrorComponent />,
        children: [
          {
            index: true,
            element: <Description />
          },
          {
            path: 'additional-information',
            element: <AdditionalInformation />
          }
        ]
      },
      {
        path: 'faq',
        element: <Faq />,
        loader: faqPageLoader,
        errorElement: <ErrorComponent />,
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

export default function App() {
  const [ cart, setCart ] = useState({});
  const [ favorite, setFavorite ] = useState({});

  const handleCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart[item.id];
      if(existingItem){
        return{
          ...prevCart,
          [item.id] : {
            ...existingItem,
            quantity: existingItem.quantity + 1
          }
        }
      }else{
        return{
          ...prevCart,
          [item.id] : {
            ...item,
            quantity: 1
          }
        }
      }
    })
  }

  const handleFav = (item) => {
    setFavorite(prevData => {
      const existingItem = prevData[item.id];
      if(existingItem){
        return{
          ...prevData,
          [item.id]: {
            ...existingItem,
            favorited : !existingItem.favorited
          }
        }
      }
      else{
        return {
          ...prevData,
          [item.id]: {
            ...item,
            favorited: true
          }
        }
      }
    })
  }

  const addQuantity = (id) => {
    setCart(prevCart => (
        {
          ...prevCart,
          [id]: {
            ...prevCart[id],
            quantity: prevCart[id].quantity + 1
          }
        }
       )
    )
}

const reduceQuantity = (id) => {
    setCart(prevData => {
        const updatedCart = {...prevData}
        if(updatedCart[id].quantity > 1){
           updatedCart[id].quantity -= 1
        }else{
          delete updatedCart[id];
        }
        return updatedCart;
    }
        )
}

const deleteProduct = (id) => {
    setCart(prevData => {
      const updatedCart = { ...prevData }
      delete updatedCart[id];
      return updatedCart;
    })
}

  return (
    <AppContext.Provider value={{cart, favorite, handleCart, handleFav, addQuantity, reduceQuantity, deleteProduct, setCart}}>
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
    </AppContext.Provider>
  )
}

export {AppContext}
