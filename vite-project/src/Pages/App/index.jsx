import './App.css'
import { ShoppingCartProvider } from '../../Context'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from "../Home" 
import Clothes from '../Clothes'
import Furnitures from '../Furnitures'
import Toys from '../Toys'
import Others from '../Others'
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders/inde"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import Navbar from '../../Components/Navbar'

import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/clothes', element: <Clothes />},
    { path: '/furnitures', element: <Furnitures />},
    { path: '/toys', element: <Toys />},
    { path: '/others', element: <Others />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/my-orders/last', element: <MyOrder />},
    { path: '/my-orders/:id', element: <MyOrder />},
    { path: '/sign-in', element: <SignIn />},
    { path: '/*', element: <NotFound />},


  ])
  return routes
}



const App = () => {


  return (
   <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
      <CheckoutSideMenu/>
    </BrowserRouter>
   </ShoppingCartProvider>
   
  )
}

export default App 
