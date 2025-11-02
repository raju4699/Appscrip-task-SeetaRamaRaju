import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";

import ProductCard from "../ProductCard";
import styles from "./index.module.css";

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          setLoading(false);
          setProductsList(data);
        }
      } catch (e) {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <div className={styles.productsContentContainer}>
      {isLoading ? (
        <Oval
          visible={true}
          height="60"
          width="60"
          color="#000000"
          secondaryColor="#333333"
          ariaLabel="oval-loading"
        />
      ) : (
        <ul className={styles.productsListContainer}>
          {productsList.map((each) => (
            <ProductCard key={each.id} product={each} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
