import './App.css'
import { ShoppingCartProvider } from '../../Context'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from "../Home" 
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders/inde"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import SignUp from '../SignUp'
import Navbar from '../../Components/Navbar'

import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/intro-react-vite/', element: <Home />},
    { path: '/intro-react-vite/clothes', element: <Home />},
    { path: '/intro-react-vite/electronics', element: <Home />},
    { path: '/intro-react-vite/furnitures', element: <Home />},
    { path: '/intro-react-vite/toys', element: <Home />},
    { path: '/intro-react-vite/others', element: <Home />},
    { path: '/intro-react-vite/my-account', element: <MyAccount />},
    { path: '/intro-react-vite/my-order', element: <MyOrder />},
    { path: '/intro-react-vite/my-orders', element: <MyOrders />},
    { path: '/intro-react-vite/my-orders/last', element: <MyOrder />},
    { path: '/intro-react-vite/my-orders/:id', element: <MyOrder />},
    { path: '/intro-react-vite/sign-in', element: <SignIn />},
    { path: '/intro-react-vite/sign-up', element: <SignUp />},
    { path: '/intro-react-vite/*', element: <NotFound />},


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
