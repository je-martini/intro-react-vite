import { useContext } from "react"
import Layout  from "../../Components/Layout"
import Card  from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Others() {
  
  const context = useContext(ShoppingCartContext)
  
  const renderView = () => {
    if(context.searchByCategory?.length > 0) {
     
      if(context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item}/>

          ))
        )
      } else {
        return(
          <div>Sorry by now it's not any Electronics avalible</div>
        )
      }

    } else {
      return(
        context.items?.map(item => (
          <Card key={item.id} data={item}/>

        ))
      )
    }
  }

  return (
    <Layout>

      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>

      {/* Search Box */}
      <input 
      type="text" 
      placeholder="Search a Product" 
      className="rounded-lg border border-black w-80 p-4 mb-8 focus:outline-none"
      onChange={ () => context.setSearchByTitle(event.target.value) }
      />
        
      <div className=" grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
       {
          renderView()
        }
      </div>
      <ProductDetail />
    </Layout>
   
  )
}

export default Others 