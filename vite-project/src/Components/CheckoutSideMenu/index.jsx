import "./style.css"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"
import { totalPrice } from "../../utils"


const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.productsInCart.filter(product => product.id != id)
        context.setProductsInCart(filteredProducts)
        
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: "04.21.2024",
            products: context.productsInCart,
            totalProducts: context.productsInCart.length,
            totalPrice: totalPrice(context.productsInCart)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setProductsInCart([])
        context.setSearchByTitle(null)
    }

    return (
    <aside className={`
        ${ context.isCheckoutSideMenuOpen ? "flex" : "hidden" }
        product-detail flex flex-col fixed 
        right-8 border border-black rounded-lg bg-white`
        }
    >
        {/* Close Icon */}
    <div className="flex  justify-between items-center p-6">
            <h2 className="font-medium text-xl">
                My Order
            </h2>
            <XMarkIcon 
            onClick={() => context.CloseCheckoutSideMenu()}
            className="h-6 w-6 cursor-pointer">

            </XMarkIcon>
    </div>
        {/* showing Products */}
    <div  className="flex-1 px-6 mt-6 overflow-y-scroll">
        {
            context.productsInCart.map(product => (
                <OrderCard
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    imageURL={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    
                    
                />
                
            ))
        }
       
    </div>
        {/* total price */}
    <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
            <span className="font-light">Total :</span>
            <span className="font-medium text-xl">${totalPrice(context.productsInCart)}</span>
        </p>
        <Link to="/intro-react-vite/my-orders/last">
            <button
                className="w-full bg-black py-3 text-white rounded-lg"
                onClick={() => handleCheckout()}
            >Checkout</button>
        </Link>
    </div>
    
    </aside>
    )
}

export { CheckoutSideMenu }