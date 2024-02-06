import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { AddressBar } from "../components/AddressBar";
import styles from "../modules/Product.module.scss";

export const Product = () => {
  const [productData, setProductData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AddressBar />
      <Header />

      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.productImage}
            src={productData.image}
            alt={productData.title}
          />
        </div>
        <div className={styles.productDetails}>
          <p className={styles.categorySmall}>{productData.category}</p>
          <h1 className={styles.title}>{productData.title}</h1>
          <p className={styles.price}>${productData.price}</p>
          <p className={styles.descriptionSmall}>{productData.description}</p>
          <hr className={styles.line} />
          <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
