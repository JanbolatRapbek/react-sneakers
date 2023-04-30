import React from "react";

function Header(props) {
  return (
    <header className="header">
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3> React sneakers</h3>
          <p>Магазин лушчих кроссовок</p>
        </div>
      </div>
      <ul className="headerRight ">
        <li onClick={props.onClickCart}>
          <img width={18} height={18} className="image" src="/img/cart.svg" />
          <span>27000 тг.</span>
        </li>
        <li>
          <img width={18} height={18} className="image" src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
