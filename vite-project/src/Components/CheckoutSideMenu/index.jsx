import "./style.css"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"


const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)

    return (
    <aside className={`
        ${ context.isCheckoutSideMenuOpen ? "flex" : "hidden" }
        product-detail flex flex-col fixed 
        right-8 border border-black rounded-lg bg-white`
        }
    >

    <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">
                My Order
            </h2>
            <XMarkIcon 
            onClick={() => context.CloseCheckoutSideMenu()}
            className="h-6 w-6 cursor-pointer">

            </XMarkIcon>
    </div>

    <div  className="px-6 mt-6 overflow-y-scroll">
        {
            context.productsInCart.map(product => (
                <OrderCard
                    key={product.id}
                    title={product.title}
                    imageURL={product.images}
                    price={product.price}
                />
            ))
        }
    </div>
    
    </aside>
    )
}

export { CheckoutSideMenu }