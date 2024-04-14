import "./style.css"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"


const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)

    

    return (
    <aside className={`
    ${ context.isProductDetailOpen ? "flex" : "hidden" }
    product-detail flex flex-col fixed 
    right-8 border border-black rounded-lg bg-white`
    }>

    <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <XMarkIcon 
            onClick={() => context.CloseProductDetail()}
            className="h-6 w-6 cursor-pointer">

            </XMarkIcon>
    </div>

    <figure className="p-6">
        <img 
            className="w-full h-full rounded-lg"
            src={context.ProductToShow.images[0]} 
            alt={context.ProductToShow.title}/>
    </figure>
    <p className="flex flex-col p-6">
        <span 
        className="font-medium text-2xl mb-2"
        >
            ${context.ProductToShow.price}
        </span>

        <span
        className="font-medium text-md mb-3"
        >{context.ProductToShow.title}
        </span>
        <span
        className="font-light text-sm"
        >{context.ProductToShow.description}
        </span>

    </p>
    </aside>
    )
}

export { ProductDetail }