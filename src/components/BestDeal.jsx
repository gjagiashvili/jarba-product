import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../modules/BestDeal.module.scss";

export const BestDeal = () => {
  const [popularProductsArr, setPopularProductsArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10&offset=5")
      .then((response) => response.json())
      .then((data) => {
        const lastFiveProducts = data.slice(-5);
        setPopularProductsArr(lastFiveProducts);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes["popular-products-wrapper"]}>
      {popularProductsArr.map(function (popularProduct, index) {
        return (
          <>
            <Link to={"/"} key={index}>
              <img src={popularProduct.image} alt="" />
              <p>{popularProduct.title.slice(0, 20)} ...</p>
              <p className={classes["price"]}>{popularProduct.price} $</p>
            </Link>
          </>
        );
      })}
    </div>
  );
};
