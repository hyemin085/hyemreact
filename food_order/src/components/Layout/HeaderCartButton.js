import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/Cart-Context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((number, item) => {
    return number + item.amount;
  }, 0); //첫번째인수는 함수 두번째 인수는 시작값(value)



  const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  },[items]);

  return(
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>내장바구니</span>
      <span className={classes.badge}>
       {numberOfCartItems}
      </span>
    </button>
  )

}

export default HeaderCartButton;