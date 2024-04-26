import { useContext } from "react"
import Layout  from "../../Components/Layout"
import Card  from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
  
  const context = useContext(ShoppingCartContext)
  

  return (
    <Layout>

      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>

      <input 
      type="text" 
      placeholder="Search a Product" 
      className="rounded-lg border border-black w-80 p-4 mb-8 focus:outline-none"
      onChange={ () => context.setSearchByTitle(event.target.value)}
      />
        
      <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
       {
          context.items?.map(item => {
            return <Card key={item.id} data={item}/>

          })
        }
      </div>
      <ProductDetail />
    </Layout>
   
  )
}

export default Home 
