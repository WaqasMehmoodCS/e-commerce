import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  // const items = props.items;
  const index = props.index;
  // console.log(index);
  // console.log(props);
  // console.log(items);

  return (
    <>
      <div
        className="card p-2"
        style={{
          boxShadow: "5px 5px 5px 5px lightBlue",
          // maxHeight: 600,
          flexWrap: "wrap",
          minHeight: 450,
          margin: 5,
          overflow: "hidden",
        }}
      >
        <img
          src={props.cardImage}
          className="card-img-top"
          alt="Product"
          style={{ width: 100, alignSelf: "center" }}
        />
        <div className="card-body" style={{ textAlign: "justify" }}>
          <h6 className="card-title" style={{ textTransform: "capitalize" }}>
            Product Name : {props.productName}
          </h6>
          <h6 className="card-text" style={{ textTransform: "capitalize" }}>
            Category : {props.category}
          </h6>
          <p className="card-text" style={{ textTransform: "initial" }}>
            Product Description: {props.desc}
          </p>
          <p className="card-text">Price : ${props.price}</p>
          <p className="card-text">
            Ratings : {props.rate} ({props.count} Reviews)
          </p>
        </div>
        <Link to={`/product/${index}`} className="btn btn-primary mb-3">
          {props.buttonTitle}
        </Link>
      </div>
    </>
  );
};

export default Card;
