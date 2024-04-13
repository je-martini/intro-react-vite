import { createContext, useState } from "react";

const ShoppingCartContext = createContext(

)

const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail = () => setisProductDetailOpen(true)
    const CloseProductDetail = () => setisProductDetailOpen(false)


    return(
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                isProductDetailOpen,
                openProductDetail,
                CloseProductDetail,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider,  ShoppingCartContext }