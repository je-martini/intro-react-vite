import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import Layout  from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"


function MyOrders() {
    const context = useContext(ShoppingCartContext)

    return (
      <Layout>
        
          <div className="flex w-80 items-center justify-center relative">
            <Link to='/my-orders' className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-white cursor-pointer"/>
            </Link>
            <h1 className="font-medium text-xl mb-4">My Orders</h1>
          </div>
          {
            context.order.map( (order, index) => (

              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard 
                  totalPrice={order.totalPrice} 
                  totalProducts={order.totalProducts}
                />
              </Link>
            ))
          }
      </Layout>
     
    )
  }
  
  export default MyOrders 
  