import React from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../App";

function Card(props) {
  const onClickButton = () => {
    alert(props.title);
  };
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  const [isLiked, setIsLiked] = React.useState(false);
  const onClickLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="cards">
      <div className="card">
        <div className="favorite">
          <img
            onClick={onClickLiked}
            src={isLiked ? "/img/liked.svg" : "/img/heart.svg"}
            alt="Liked"
          ></img>
        </div>
        <div className="sneakersImg">
          <img
            src={props.imagUrl}
            alt="Sneakers"
            width={133}
            height={133}
          ></img>
        </div>
        <h5> {props.name}</h5>
        <div className="cardButton">
          <div className="cardButton1">
            <span>Цена:</span>
            <b>{props.price}тг.</b>
          </div>

          <img
            className="Plus"
            onClick={onClickPlus}
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="Pluse"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Card;
