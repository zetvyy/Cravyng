import React, { useState, useEffect } from "react";
import Styles from "../checkout-cart/css/checkout.module.scss";
import foto from "../checkout-cart/assets/logo.png";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdShoppingBasket } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaClipboardList } from "react-icons/fa";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { AiOutlineMinus } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailUser } from "../../redux/action/authAction";
import { addToCart } from "../../redux/action/addCartAction";
import { updateCheckout } from "../../redux/action/orderAction";
import { deleteCart } from "../../redux/action/addCartAction";

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return <span style={{ display: "none" }}>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
}

const theme = createTheme();

function CheckoutCart() {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState(0);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    history.push("/profile");
  };

  const users = useSelector(state => state.authReducer.data);

  const IdCheckout = useSelector(state => state.authReducer.Order);

  const { addCart } = useSelector(state => state.addCartMenu);

  const [cartData, setCartData] = useState([]);

  const handleIncrement = product => {
    const productExist = cartData.find(item => item.id === product.id);
    if (productExist) {
      setCartData(cartData.map(item => (item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item)));
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
    }
    // setCartData([
      // ...cartData.map(item => {
      //   if (item.id === itemId) {
      //     return { ...item, quantity: item.quantity + 1 };
      //   }
      //   return item;
      // })
    // ]);
  };

  const handleDecrement = product => {
    const productExist = cartData.find(item => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartData(cartData.filter((item) => item.id !== product.id))
    } else {
      setCartData(
        cartData.map(item => (item.id === product.id ? 
          { ...productExist, quantity: productExist.quantity - 1 } : item)));
    }
    // setCartData([
    //   ...cartData.map(item => {
    //     if (item.id === itemId) {
    //       return { ...item, quantity: item.quantity - 1 };
    //     }
    //     return item;
    //   })
    // ]);
  };

  const countItems = () => {
    let totalItem = 0;
    for (let i = 0; i < addCart.length; i++) {
      totalItem += addCart[i].quantity;
    }
    setItems(totalItem);
  };

  const handleCheckout = () => {
    history.push("/checkout");
    dispatch(updateCheckout(IdCheckout));
    console.log(IdCheckout);
  };

  useEffect(() => {
    setCartData(addCart);
    countItems();
  }, [addCart]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(getDetailUser());
    dispatch(addToCart());
    // dispatch(getAllCart());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const price = cartData?.reduce((total, item) => total + item?.menu?.price * item?.quantity, 0)

  const discount = cartData?.reduce((total, item) => {
    if (item?.menu?.specialPrice) {
      return total + (item?.menu?.price - item?.menu?.specialPrice) * item?.quantity;
    }
    return total;
  }, 0)

  return (
    <ThemeProvider theme={theme}>
      <MyComponent />
      <div className={Styles.Container}>
        <nav className={Styles.nav}>
          <div className={Styles.Logo}>
            <img src={foto} alt="Cravyng Logo" onClick={() => history.push("/menu")} style={{ cursor: "pointer" }} />
            {/* <a href="#">Continue as merchant</a> */}
          </div>
          <div className={Styles.cart_container}>
            <div className={Styles.Cart} onClick={() => handleNavigate()}>
              <RiAccountCircleFill className={Styles.icon_account} />
              {users.name}
            </div>

            <div className={Styles.Cart2} onClick={() => toggleMenu()}>
              <MdShoppingBasket className={Styles.icon_cart} /> {items} Items
              {/* <MdShoppingBasket className={Styles.icon_cart} /> {items} Items */}
            </div>
          </div>
        </nav>
        {visible && (
          <div className={Styles.sideCart}>
            <h2>Your Cart</h2>
            <div className={Styles.tl2}>
              <h3>Start adding items to your cart</h3>
            </div>
            <div style={{ overflow: "auto", height: "auto" }}>
              {cartData.map(item => (
                <>
                  <div className={Styles.pax}>
                    <p>{item?.menu?.food}</p>

                    <h4>
                      <Button 
                        onClick={item.quantity === 1 ? 
                          () => dispatch(deleteCart(item.id)) : 
                          () => handleDecrement(item)}
                      > 
                          {item.quantity === 1 ? <FaTrash /> : <FiMinus/>}
                      </Button>

                      {item.quantity}

                      <Button onClick={() => handleIncrement(item)}>
                        <FiPlus />
                      </Button>
                    </h4>
                  </div>

                  <div className={Styles.addition}>
                    {item?.menu?.specialPrice !== null ? (
                      <h4 className={Styles.paxSide}>
                        Rp {item?.menu?.specialPrice} <span> Rp {item?.menu?.price} </span>
                      </h4>
                    ) : (
                      <h4> Rp {item.menu.price} </h4>
                    )}
                    <p className={Styles.add}>
                      <FiPlus /> {item.menu && item.menu.variants && item.menu.variants[0].variantOptions && item?.menu?.variants[0]?.variantOptions[0]?.label}
                    </p>
                  
                    <p className={Styles.note}>
                      <FaClipboardList /> Note
                    </p>
                  </div>
                  <hr />
                  <hr />
                </>
              ))}
            </div>

            <div className={Styles.tl1}>
              <p>Price </p>
              <p>Rp {price}</p>
            </div>
            <div className={Styles.tl1}>
              <p>Discount </p>
              <p>
                -Rp {discount}
              </p>
            </div>
            <hr />
            <div className={Styles.tl3}>
              <p>Total payment </p>
              <p>Rp 
              {price - discount}
              {/* {cartData?.reduce((total, item) => total + item.subTotalPrice , 0)}  */}
              </p>
            </div>
            <div className={Styles.buttonCheck} onClick={handleCheckout}>
              <button> Go to Checkout </button>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default CheckoutCart;
