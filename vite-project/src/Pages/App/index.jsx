import './App.css'
import { ShoppingCartProvider } from '../../Context'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from "../Home" 
import { MyAccount } from "../MyAccount"
import { MyOrder } from "../MyOrder"
import { MyOrders } from "../MyOrders/inde"
import { NotFound } from "../NotFound"
import { SignIn } from "../SignIn"
import { Navbar } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/MyAccount', element: <MyAccount />},
    { path: '/MyOrder', element: <MyOrder />},
    { path: '/MyOrders', element: <MyOrders />},
    { path: '/SignIn', element: <SignIn />},
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
