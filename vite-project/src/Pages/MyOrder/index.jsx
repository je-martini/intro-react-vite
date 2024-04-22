import  Layout  from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"



function MyOrder() {
  const context = useContext(ShoppingCartContext)


    return (
      <Layout>
        My Order
        <div  className="flex flex-col">
          {
              context.order?.slice(-1)[0].products.map(product => (
                  <OrderCard
                      id={product.id}
                      key={product.id}
                      title={product.title}
                      imageURL={product.images}
                      price={product.price}                    
                  />
                  
              ))
          }
       
        </div>
      </Layout>
     
    )
  }
  
  export default MyOrder 
  