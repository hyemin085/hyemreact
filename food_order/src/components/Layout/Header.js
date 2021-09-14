import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return(
    <React.Fragment>
      <header className={classes.header}>
        <h1>헹구네 음식주문</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt="맛있는 음식이 많이 있어요 ~~"/>
      </div>
    </React.Fragment>
  )
};

export default Header;