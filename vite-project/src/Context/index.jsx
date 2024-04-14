import { createContext, useState } from "react";

const ShoppingCartContext = createContext(

)

const ShoppingCartProvider = ({children}) => {
    // Shopping Cart increment Quantity
    const [count, setCount] = useState(0)

    // Open/Close Product Detail
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail = () => setisProductDetailOpen(true)
    const CloseProductDetail = () => setisProductDetailOpen(false)

    // Showing Product Detail
    const [ProductToShow, setProductToShow] = useState({})

    // Showing Cart Add Products to cart
    const [productsInCart, setProductsInCart] = useState([])


    return(
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                isProductDetailOpen,
                openProductDetail,
                CloseProductDetail,
                ProductToShow,
                setProductToShow,
                productsInCart,    
                setProductsInCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider,  ShoppingCartContext }