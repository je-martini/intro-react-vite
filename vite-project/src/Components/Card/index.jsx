import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'


const Card = (data) => {
    
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) =>{
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setProductsInCart([...context.productsInCart, productData])
        context.openCheckoutSideMenu()
        
    }

    const renderIcon = (id) => {
        const isInCart = context.productsInCart.
            filter(product => product.id === id).length > 0 
        
        if(isInCart){
            return(
                <div
                    className="
                    absolute top-0 right-0 flex 
                    justify-center items-center bg-black 
                    rounded-full m-2"
                    >
                    <CheckIcon 
                        className="h-6 w-6 text-white"
                    ></CheckIcon>
                </div>
            )
        }else{
            return(
                <div
                    className="
                    absolute top-0 right-0 flex 
                    justify-center items-center bg-white 
                    rounded-full m-2"
                    onClick={ (event) => addProductsToCart(event, data.data)}
                    >
                    <PlusIcon 
                        className="h-6 w-6"
                    ></PlusIcon>
                </div>
            )
        }
        
        
    }
    
    return(
        <div 
        onClick={() => showProduct(data.data)}
        className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="
                absolute bottom-0 left-0 bg-white/60 rounded-lg
                text-black text-xs m-2 px-3 py-0.5">
                    {data.data.category.name}
                    
                </span>

                <img 
                className=" w-full h-full object-cover rounded-lg"
                src=
                 {data.data.images[0]}
                 alt={data.data.title} 
                />

                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">
                    { data.data.title}
                </span>
                <span className="text-lg font-midium">
                    ${data.data.price} 
                </span>

            </p>
        </div>
    )
}

export default Card 