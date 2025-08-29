import React, { createContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { all_products_data, blog_data } from "../assets/assets";

export const myContext = createContext();

const MyContextProvider = ({ children }) => {
    
    const navigate = useNavigate();

    // SIDE NAV BAR

    const [sideNavShow, setSideNavShow] = useState(false);
    const handlesideNavClose = () => setSideNavShow(false);
    const handlesideNavShow = () => setSideNavShow(true);

    const [showDropDown, setShowDropDown] = useState(false);
    const handleCloseDropDown = () => setShowDropDown(false);
    const handleShowDropDown = () => setShowDropDown(true);

    // SEARCH CANVAS
    
    const [showSearch, setShowSearch] = useState(false);
    const handleCloseSearch = () => setShowSearch(false);
    const handleShowSearch = () => setShowSearch(true);

    // LOGIN CANVAS
    
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    // REGISTER CANVAS

    const [showRegister, setShowRegister] = useState(false);
    
    const handleCloseRegister = () => {
        setShowRegister(false);
        setShowLogin(true);
    };
    const handleShowRegister = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    // SEARCH CANVAS FUNCTIONALITY
    
    const [query, setQuery] = useState("");

    const filteredProducts =
    query.trim() === ""
        ? []
        : all_products_data?.filter(
            (product, index, self) =>
            (
                product.desc.toLowerCase().includes(query.toLowerCase()) ||
                product.product.toLowerCase().includes(query.toLowerCase()) ||
                String(product.price).toLowerCase().includes(query.toLowerCase())
            ) &&
        self.findIndex((p) => p.id === product.id) === index
    );

    // CART FUNCTIONALITY 

    const [showCart, setShowCart] = useState(false);
    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    const [cart, setCart] = useState([]);

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, type) => {
        setCart((prev) =>
        prev.map((item) =>
            item.id === id
            ? {
                ...item,
                quantity: type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
                }
            : item
        )
        );
    };

    const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // NEW ARRIVAL CART

    const [showProductModal, setShowProductModal] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [cartNotification, setCartNotification] = useState(null);

    const handleModalToggle = (product) => {
        setCurrentProduct(product);
        setShowProductModal(!showProductModal);
    };

    // PRODUCT PAGE 

    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const isAlreadyInCart = prevCart.find(item => item.id === product.id);

            if (isAlreadyInCart) {
                setCartNotification(`"${product.desc}" has been remove from your cart.`);
                return prevCart.filter(item => item.id !== product.id);
            } else {
                setCartNotification(`"${product.desc}" has been added to your cart.`);
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });

        setTimeout(() => {
            setCartNotification("");
        }, 3000);
    };

    var { productID } = useParams();

    const selectedProduct = all_products_data?.find((e) => e.id === Number(productID));

    // BLOG PAGE 

    const { blogID } = useParams()

    const blogs = blog_data?.find((e) => e.id === Number(blogID));

    var max_id = Object.keys(blog_data).length;

    var nextDesc='';
    var prevDesc='';

    var nextId=Number(blogID)+1;
    var prevId=Number(blogID)-1;

    {blog_data.map((e)=>{
                        
        if(nextId===e.id){
        nextDesc=e.desc;
        }
        if(prevId==e.id){
        prevDesc=e.desc;
        }

    })}

    // WISHLIST FUNCTIONALITY 

    const [wishlist, setWishlist] = useState([]);

    const handleWishlistToggle = (product) => {
        setWishlist((prev) => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
            return prev.filter(item => item.id !== product.id); // remove
            } else {
            return [...prev, product]; // add
            }
        });
    };

    // SHOP PAGE 

    const [tag, setTag] = useState(false);

    const [size, setSize] = useState(false);

    const [price, setPrice] = useState(false);

    const [color, setColor] = useState(false);

    const [product_category, setProduct_category] = useState(true);

    const samevalue=[];

    var count=[];

    all_products_data.map((e)=>{
        samevalue.push(e.product);
    })
    
    samevalue.map(function(i) { 
        count[i] = (count[i]||0) + 1;
    });

    var values=Object.keys(count);

    var counts=Object.values(count);

    const myContextValue = {

        navigate,

        // SIDE NAV BAR

        sideNavShow, handlesideNavClose, handlesideNavShow,
        showDropDown, handleCloseDropDown, handleShowDropDown,

        // SEARCH CANVAS

        showSearch, handleShowSearch, handleCloseSearch, 

        // LOGIN CANVAS

        showLogin, handleCloseLogin, handleShowLogin,

        // REGISTER CANVAS

        showRegister, handleShowRegister, handleCloseRegister,
        
        // SEARCH FUNCATIONALITY 

        query, setQuery, filteredProducts,

        // CART FUNCTIONALITY 

        showCart, handleShowCart, handleCloseCart, cart, removeFromCart, updateQuantity, subtotal, totalItems,

        // NEW ARRIVALS CART

        hoveredIndex, setHoveredIndex, currentProduct, handleModalToggle,
        cartNotification, setCartNotification, handleAddToCart, showProductModal, setShowProductModal,

        // PRODUCT PAGE 

        selectedProduct,

        // BLOG PAGE 

        blogID, blogs, max_id, nextDesc, prevDesc,
        
        // WISHLIST FUNCTIONALITY 

        wishlist, handleWishlistToggle,

        // SHOP PAGE

        product_category, values, counts, price, color, size, tag

    };

    return(
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    );
};

export default MyContextProvider;