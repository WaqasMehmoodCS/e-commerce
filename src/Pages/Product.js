import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../Data/APIData";

const Product = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  let { id } = useParams();
  console.log(data);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const result = await axios.get(`/products/${id}`);
      // console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <Header />
        {data && (
          <>
            <div className="row mb-5">
              <div
                className="col"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={data.image}
                  alt="product"
                  style={{
                    width: 200,
                  }}
                />
              </div>
            </div>
            <div className="row row-cols-2 mb-3">
              <div className="col-2" style={{ fontWeight: "bold" }}>
                Category :
              </div>
              <div className="col-10" style={{ textTransform: "capitalize" }}>
                {data.category}
              </div>
            </div>
            <div className="row row-cols-2 mb-3">
              <div className="col-2" style={{ fontWeight: "bold" }}>
                Description :
              </div>
              <div
                className="col-10"
                style={{ textTransform: "initial", textAlign: "justify" }}
              >
                {data.description}
              </div>
            </div>
            <div className="row row-cols-2 mb-3">
              <div className="col-2" style={{ fontWeight: "bold" }}>
                Price :
              </div>
              <div className="col-10" style={{ textTransform: "capitalize" }}>
                $ {data.price}
              </div>
            </div>
            <div className="row row-cols-2 mb-3">
              <div className="col-2" style={{ fontWeight: "bold" }}>
                Title :
              </div>
              <div className="col-10" style={{ textTransform: "capitalize" }}>
                {data.title}
              </div>
            </div>
            <div className="row row-cols-2 mb-3">
              <div className="col-2" style={{ fontWeight: "bold" }}>
                Ratings :
              </div>
              <div className="col-10" style={{ textTransform: "capitalize" }}>
                {data.rating.rate} ({data.rating.count} Reviews)
              </div>
            </div>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                className="btn btn-primary p-3 mt-3 mb-3"
                style={{ width: "75%" }}
                onClick={() => {
                  navigate("/cart");
                }}
              >
                Add to Cart
              </button>
            </div>
          </>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Product;
