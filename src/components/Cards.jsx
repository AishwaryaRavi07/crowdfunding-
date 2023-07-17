import React from "react";
import SliderTimeline from "./SliderTimeline";

const MyCard = ({ title,category, description, image,items,metamaskwalletID,targetfund,raisedfund }) => {
  return (
    <div className="card">
      <img src={image} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-category">{category}</h4>
        <p className="card-description">{description}</p>
        <ul className="card-items">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="card-metamaskwalletID">Creator:{metamaskwalletID}</p>
        <p className="card-targetfund">Target Fund: {targetfund}</p>
        <SliderTimeline raised={raisedfund} target={targetfund}/>
      </div>
    </div>
  );
};

export default MyCard;