import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

import Popup from "reactjs-popup";

import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.headerSection}>
      <div className={styles.headerTopTextContainer}>
        <div className={styles.headerTopTextSubContainer}>
          <img
            className={styles.headerTopImage}
            alt="top"
            src="https://res.cloudinary.com/don6xt1fg/image/upload/v1761982427/element-4_surgjf.png"
          />
          <p className={styles.headerTopText}>Lorem ipsum dolor</p>
        </div>
        <div className={styles.headerTopTextSubContainerLarge}>
          <img
            className={styles.headerTopImage}
            alt="top"
            src="https://res.cloudinary.com/don6xt1fg/image/upload/v1761982427/element-4_surgjf.png"
          />
          <p className={styles.headerTopText}>Lorem ipsum dolor</p>
        </div>
        <div className={styles.headerTopTextSubContainerLarge}>
          <img
            className={styles.headerTopImage}
            alt="top"
            src="https://res.cloudinary.com/don6xt1fg/image/upload/v1761982427/element-4_surgjf.png"
          />
          <p className={styles.headerTopText}>Lorem ipsum dolor</p>
        </div>
      </div>
      <div className={styles.headerNavigationSection}>
        <div className={styles.logoContainer}>
          <Popup
            modal
            overlayClassName="popup-overlay"
            trigger={
              <button type="button" className={styles.emptyButton}>
                <RxHamburgerMenu className={styles.icon} />
              </button>
            }
          >
            {(close) => (
              <div className={styles.popupContainer}>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => close()}
                >
                  <AiOutlineClose className={styles.closeIcon} />
                </button>
                <h2 className={styles.sidebarHeading}>SKILLS</h2>
                <h2 className={styles.sidebarHeading}>STORIES</h2>
                <h2 className={styles.sidebarHeading}>ABOUT</h2>
                <h2 className={styles.sidebarHeading}>CONTACT US</h2>
              </div>
            )}
          </Popup>
          <div className={styles.headerLogoContainer}>
            <img
              className={styles.headerLogo}
              alt="logo"
              src="https://res.cloudinary.com/don6xt1fg/image/upload/v1761986233/Vector_mcztvv.png"
            />
          </div>
        </div>
        <div className={styles.logoHeadingContainer}>
          <h1 className={styles.logoHeading}>LOGO</h1>
        </div>
        <div className={styles.iconContainer}>
          <CiSearch className={styles.icon} />
          <IoHeartOutline className={styles.icon} />
          <HiOutlineShoppingBag className={styles.icon} />
          <IoPersonOutline className={styles.largeIcons} />
          <select className={styles.selectElement}>
            <option>Eng</option>
            <option>Tel</option>
            <option>Hin</option>
          </select>
        </div>
      </div>
      <div className={styles.headerNavLarge}>
        <h2 className={styles.largeHeading}>SKILLS</h2>
        <h2 className={styles.largeHeading}>STORIES</h2>
        <h2 className={styles.largeHeading}>ABOUT</h2>
        <h2 className={styles.largeHeading}>CONTACT US</h2>
      </div>
      <hr className={styles.horizontalLine} />
    </header>
  );
};

export default Header;
