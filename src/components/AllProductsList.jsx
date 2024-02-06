import { useState, useEffect } from "react";
import classes from "../modules/AllProductsList.module.scss";
import { Link } from "react-router-dom";

export const AllProductsList = () => {
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductsArr(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes["popular-products-wrapper"]}>
      {productsArr.map(function (product, index) {
        return (
          <Link
            to={`/product/${index + 1}`}
            key={index}
            className={classes["product-card"]}
          >
            <img src={product.image} alt="" />
            <p>{product.title.slice(0, 20)} ...</p>
            <p className={classes.price}>{product.price}$</p>
          </Link>
        );
      })}
    </div>
  );
};
