import { createContext, useState } from "react";

const ShoppingCartContext = createContext(

)

const ShoppingCartProvider = ({children}) => {
    // Shopping Cart increment Quantity
    const [count, setCount] = useState(0)

    // Open/Close Product Detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const CloseProductDetail = () => setIsProductDetailOpen(false)

    // Open/Close Checkout Side Menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const CloseCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

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
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                CloseCheckoutSideMenu,
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