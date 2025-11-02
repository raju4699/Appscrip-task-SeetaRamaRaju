import Filters from "../Filters";
import styles from "./index.module.css";

const Shop = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.homeShopBar}>
        <p className={styles.homeShopBarText}>HOME</p>
        <p className={styles.homeShopBarText}>|</p>
        <p className={styles.homeShopBarSpan}>SHOP</p>
      </div>
      <div className={styles.headingsContainer}>
        <h1 className={styles.mainHeading}>DISCOVER OUR PRODUCTS</h1>
        <h2 className={styles.subHeading}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </h2>
      </div>
      <Filters />
    </div>
  );
};

export default Shop;
