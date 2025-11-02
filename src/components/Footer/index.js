import React, { useState } from "react";
import styles from "./index.module.css";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const mettaMuseLinks = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs",
];

const quickLinks = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];

const LinkList = ({ links }) => (
  <div className={styles.mobileLinkList}>
    {links.map((link) => (
      <p className={styles.subLink}>{link}</p>
    ))}
  </div>
);

const MobileDropdown = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <div
        className={styles.mobileDropdownHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.sectionTitle}>{title}</span>
        {isOpen ? (
          <MdKeyboardArrowUp size={24} />
        ) : (
          <MdKeyboardArrowDown size={24} />
        )}
      </div>
      <div
        className={`${styles.mobileDropdownContent} ${
          isOpen ? styles.open : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topSection}>
        <div className={styles.beTheFirst}>
          <p className={styles.sectionTitle}>BE THE FIRST TO KNOW</p>
          <p className={styles.subscribeTextSmall}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <p className={styles.subscribeText}>
            Sign up for updates from mettā muse.
          </p>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>SUBSCRIBE</button>
          </div>
        </div>

        <hr className={styles.hrLine} />

        <div className={styles.mobileContactCurrency}>
          <div className={styles.contactInfo}>
            <p className={styles.sectionTitle}>CALL US</p>
            <div>
              +44 221 133 5360 •{" "}
              <a href="mailto:customercare@mettamuse.com">
                customercare@mettamuse.com
              </a>
            </div>
          </div>

          <hr className={styles.hrLine} />

          <div className={styles.currencyInfo}>
            <p className={styles.sectionTitle}>CURRENCY</p>
            <div className={styles.currencyDetails}>
              <img
                alt="flag"
                src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103167/United_States_of_America_US_z1vcpr.png"
              />
              <span>USD</span>
            </div>
            <p className={styles.currencyHoverText}>
              Transactions will be completed in Euro and a currency reference is
              available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <MobileDropdown title="mettā muse">
          <h1 className={styles.linksMainHeading}>mettā muse</h1>
          <LinkList links={mettaMuseLinks} />
        </MobileDropdown>

        <MobileDropdown title="QUICK LINKS">
          <h1 className={styles.linksMainHeading}>QUICK LINKS</h1>
          <LinkList links={quickLinks} />
        </MobileDropdown>

        <MobileDropdown title="FOLLOW US">
          <h1 className={styles.linksMainHeading}>FOLLOW US</h1>
          <div className={styles.followUsColumn}>
            <div className={styles.followUs}>
              <FaInstagram className={styles.socialIcon} size={20} />
              <FaLinkedinIn className={styles.socialIcon} size={20} />
            </div>
            <div className={styles.acceptsLarge}>
              <h1 className={styles.linksMainHeading}>mettā muse ACCEPTS</h1>
              <div className={styles.paymentLogos}>
                <img
                  src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103022/Group_136188_hk2qhv.png"
                  alt="Google Pay"
                  className={styles.paymentLogo}
                />
                <img
                  src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103027/Group_136190_oeqxvv.png"
                  alt="Mastercard"
                  className={styles.paymentLogo}
                />
                <img
                  src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103031/Group_136192_xe3f3d.png"
                  alt="PayPal"
                  className={styles.paymentLogo}
                />
                <img
                  src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103035/Group_136193_vxxomx.png"
                  alt="Amex"
                  className={styles.paymentLogo}
                />
                <img
                  src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103041/Group_136194_pa7otg.png"
                  alt="Apple Pay"
                  className={styles.paymentLogo}
                />
                <img
                  src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103046/Group_136195_nig3g3.png"
                  alt="O Pay"
                  className={styles.paymentLogo}
                />
              </div>
            </div>
          </div>
        </MobileDropdown>

        <div className={styles.acceptsSmall}>
          <p className={styles.sectionTitle}>mettā muse ACCEPTS</p>
          <div className={styles.paymentLogos}>
            <img
              src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103022/Group_136188_hk2qhv.png"
              alt="Google Pay"
              className={styles.paymentLogo}
            />
            <img
              src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103027/Group_136190_oeqxvv.png"
              alt="Mastercard"
              className={styles.paymentLogo}
            />
            <img
              src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103031/Group_136192_xe3f3d.png"
              alt="PayPal"
              className={styles.paymentLogo}
            />
            <img
              src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103035/Group_136193_vxxomx.png"
              alt="Amex"
              className={styles.paymentLogo}
            />
            <img
              src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103041/Group_136194_pa7otg.png"
              alt="Apple Pay"
              className={styles.paymentLogo}
            />
            <img
              src="https://res.cloudinary.com/don6xt1fg/image/upload/v1762103046/Group_136195_nig3g3.png"
              alt="O Pay"
              className={styles.paymentLogo}
            />
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
