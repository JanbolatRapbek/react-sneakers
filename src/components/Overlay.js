import React from "react";

function Overlay({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            onClick={onClose}
            src="/img/btn-remove.svg"
            alt="Close"
            className="removeBtn"
          ></img>
        </h2>
        <div>
          {items.map((obj) => {
            <div className="cartItem">
              <div className="cartItemImg">
                <img
                  className="Img1 "
                  width={70}
                  height={70}
                  src="/img/sneakers/1.jpg"
                  alt="Sneakers"
                ></img>
              </div>
              <div className="cartPrise">
                <p>Nike Air Max 270</p>
                <b>28000 тг.</b>
              </div>

              <img
                src="/img/btn-remove.svg"
                alt="Remove"
                className="removeBtn"
              ></img>
            </div>;
          })}
          <ul className="totalBlock">
            <li>
              <span>Итого:</span>
              <div className="order"></div>
              <b>27000 тг.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>29000 тг.</b>
            </li>
          </ul>

          <button className="submitBtn">Оформить </button>
        </div>
      </div>
    </div>
  );
}
export default Overlay;
