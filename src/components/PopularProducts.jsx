import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../modules/PopularProducts.module.scss";

export const PopularProducts = () => {
  const [popularProductsArr, setPopularProductsArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((data) => {
        setPopularProductsArr(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className={classes["popular-products-wrapper"]}>
      <div className={classes["title"]}>
        <h3>The most popular Products</h3>
        <Link to={"/products"}>View All</Link>
      </div>
      <div className={classes["products-list"]}>
        {popularProductsArr.map(function (popularProduct, index) {
          return (
            <Link to={"/"} key={index}>
              <img src={popularProduct.image} alt="" />
              <p>{popularProduct.title.slice(0, 20)} ...</p>
              <p className={classes["price"]}>{popularProduct.price} $</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
