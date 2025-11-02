import { IoHeartOutline } from "react-icons/io5";
import styles from "./index.module.css";

const ProductCard = ({ product }) => {
  const { title, image, price } = product;
  return (
    <li className={styles.productListItem}>
      <img alt={title} className={styles.productImage} src={image} />
      <p className={styles.productTitle}>{title}</p>
      <div className={styles.productTextContainer}>
        <p className={styles.productTitle}>{price}/- Rs</p>
        <button className={styles.likeButton}>
          <IoHeartOutline />
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
