import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import NotFound from '../components/Notfound.jsx';
// used lazy and suspense to render when the component needed
// used different routing for different components

const Hero = lazy(()=> import("../components/Hero.jsx"));
const TopRatedProducts = lazy(()=> import("../components/TopRatedProducts.jsx"));
const ProductList = lazy(()=>import("../components/ProductList.jsx"));
const ProductDetail = lazy(()=>import("../components/ProductDetail.jsx"));
const Cart = lazy(()=> import("../components/Cart.jsx"));
const Checkout = lazy(()=> import("../components/checkOut.jsx"));

const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<NotFound/>,
  children:[{
    path:"/",
    element:<>
     <Suspense fallback={<div>loading.....</div>}>
       <Hero/>
     </Suspense>
     <Suspense  fallback={<div>loading.....</div>}>
             <TopRatedProducts/>
     </Suspense>
  

    </>
  },  {
    path:"/products",
    element:
    <Suspense fallback={<div>loading.....</div>} >
          <ProductList/>
    </Suspense>
    
  },{
    path:"/products/:id",
    element:
    <Suspense fallback={<div>loading.....</div>}>
         <ProductDetail></ProductDetail>
    </Suspense>
  
    
  },{
    path:"/cart",
    element:
    <Suspense fallback={<div>loading.....</div>}>
         <Cart></Cart>
    </Suspense>
   
  },{
    path:"/checkout",
    element:<Suspense fallback={<div>loading.....</div>}>
      <Checkout/>
    </Suspense>
  }]
},])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}>
    
    </RouterProvider>
   
  </StrictMode>,
)
