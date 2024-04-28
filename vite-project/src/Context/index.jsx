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

    
    useEffect( () =>{
        fetch('https://api.escuelajs.co/api/v1/products/')
        .then(response => response.json())
        .then( data => setItems(data))
        
    }, [])
    
    // Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null)
    
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase() ))
    }

    // Get Products By Category
    const [searchByCategory, setSearchByCategory] = useState(null)

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase() ))
    }

    const filterBy = (searchType, items, searchByCategory, searchByTitle) => {
        if(searchType === 'BY_CATEGORY_AND_CATEGORY') {
            return setFilteredItems(filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase() )))
        }
        
        if(searchType === 'BY_TITLE') {
            return setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        }

        if(searchType === 'BY_CATEGORY') {
            return setFilteredItems(filteredItemsByCategory(items, searchByCategory))
        }

        if(!searchType) {
            return items
        }
    }

    useEffect(() => {
        if(searchByCategory && searchByTitle) setFilteredItems(filterBy("BY_CATEGORY_AND_CATEGORY", items, searchByCategory, searchByTitle))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE", items, searchByCategory, searchByTitle))
        if(searchByCategory && !searchByTitle) setFilteredItems(filterBy("BY_CATEGORY", items, searchByCategory, searchByTitle))
        if(!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null , items, searchByCategory, searchByTitle))

    }, [items, searchByTitle, searchByCategory])


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