import axios from "../Data/APIData";
import Card from "../Components/Card";
import Header from "../Components/Header";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await axios.get("/products");
      const items = result.data;
      // console.log(items);
      setProducts(items);
    } catch (error) {
      console.log(error);
    }
  };
  // getProducts();

  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          {products.length > 0 &&
            products.map((items, index) => {
              // console.log(items);
              return (
                <div className="col-4" key={index}>
                  <Card
                    cardImage={items.image}
                    category={items.category}
                    price={items.price}
                    productName={items.title}
                    // desc={items.description}
                    rate={items.rating.rate}
                    count={items.rating.count}
                    index={items.id}
                    buttonTitle={"Product Details"}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
