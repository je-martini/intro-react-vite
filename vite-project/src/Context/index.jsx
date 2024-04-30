import { createContext, useState, useEffect } from "react";

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

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null)
    
    // Get Products By Category
    const [searchByCategory, setSearchByCategory] = useState(null)


    useEffect( () =>{
        fetch('https://api.escuelajs.co/api/v1/products/')
        .then(response => response.json())
        .then( data => setItems(data))

    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase() ))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase() ))
    }

    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        if(searchByCategory) setFilteredItems(filteredItemsByCategory(items, searchByCategory))

    }, [items, searchByTitle, searchByCategory])

    console.log("filteredItems: ", filteredItems)
    console.log("searchByCategory: ", searchByCategory)

    

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
                setProductsInCart,
                order, 
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,   
                setFilteredItems,
                searchByCategory, 
                setSearchByCategory
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider,  ShoppingCartContext }