import { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import ProductList from "../ProductList";
import styles from "./index.module.css";

const Options = [
  "Recommended",
  "Newest First",
  "Popular",
  "Price: High to Low",
  "Price: Low to High",
];

const FilterOptions = {
  IDEAL_FOR: ["Men's Clothing", "Women's Clothing", "Electronics", "Jewelry"],
  OCCASION: ["Casual", "Formal", "Party", "Sports"],
  WORK: ["Embroidery", "Dyeing", "Handloom"],
  FABRIC: ["Cotton", "Polyester", "Wool", "Denim"],
  SEGMENT: ["Fashion", "Home Decor", "Accessories"],
  SUITABLE_FOR: ["Adults", "Kids", "Teenagers"],
  RAW_MATERIALS: ["Organic Cotton", "Recycled Fabric", "Leather", "Metal"],
  PATTERN: ["Solid", "Printed", "Striped", "Checked"],
};

const AllFilters = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

const FilterSection = ({
  title,
  options = [],
  selected = [],
  onToggle,
  isOpen: sectionIsOpen,
}) => {
  return (
    <div className={styles.filterSection}>
      <div className={styles.filterSectionHeader} onClick={onToggle}>
        <h3 className={styles.filterSectionTitle}>{title}</h3>

        <MdKeyboardArrowDown
          className={`${styles.filterSectionToggle} ${
            sectionIsOpen ? styles.rotatedArrow : ""
          }`}
          size={20}
        />
      </div>

      {sectionIsOpen && (
        <div className={styles.filterSectionContent}>
          {AllFilters.includes(title) && title !== "CUSTOMIZABLE" && (
            <span className={styles.unselectAll}>Unselect all</span>
          )}

          {options.map((option) => (
            <label key={option} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => {
                  console.log(`Toggled: ${option}`);
                }}
              />

              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileFilterModal = ({
  isOpen,
  onClose,
  openSections,
  toggleSection,
  selectedFilters,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileModalOverlay}>
      <div
        className={`${styles.mobileModalContent} ${
          isOpen ? styles.modalOpen : ""
        }`}
      >
        <div className={styles.mobileModalHeader}>
          <button onClick={onClose} className={styles.mobileCloseButton}>
            <IoClose size={20} />
          </button>

          <h2 className={styles.modalTitle}>ALL FILTERS</h2>

          <button className={styles.mobileClearButton}>CLEAR ALL</button>
        </div>

        <div className={styles.mobileFilterSections}>
          {AllFilters.map((title) => (
            <FilterSection
              key={title}
              title={title}
              isOpen={!!openSections[title]}
              onToggle={() => toggleSection(title)}
              options={FilterOptions[title.replace(/\s/g, "_")]}
              selected={selectedFilters[title] || []}
            />
          ))}
        </div>

        <div className={styles.mobileModalFooter}>
          <button className={styles.applyFiltersButton}>APPLY FILTERS</button>
        </div>
      </div>
    </div>
  );
};

const Filters = () => {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(Options[0]);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,

      [title]: !prev[title],
    }));
  };

  const handleSortSelect = (option) => {
    setSelectedSortOption(option);
    setIsDropdownOpen(false);
  };

  const SortDropdown = () => (
    <div className={styles.selectWrapper}>
      <div
        className={styles.selectElement}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        role="button"
        tabIndex="0"
        aria-expanded={isDropdownOpen}
        aria-haspopup="listbox"
      >
        {selectedSortOption}

        <MdKeyboardArrowDown
          className={`${styles.downArrow} ${
            isDropdownOpen ? styles.rotatedArrow : ""
          }`}
          size={20}
        />
      </div>

      {isDropdownOpen && (
        <ul className={styles.optionsList} role="listbox">
          {Options.map((option) => (
            <li
              key={option}
              className={styles.optionItem}
              onClick={() => handleSortSelect(option)}
              role="option"
              aria-selected={selectedSortOption === option}
            >
              <FaCheck
                size={18}
                className={`${styles.checkIcon} ${
                  selectedSortOption === option ? styles.activeCheckIcon : ""
                }`}
              />

              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className={styles.allFiltersContainer}>
      <div className={styles.smallDeviceFilterContainer}>
        <div className={styles.filterControls}>
          <button
            className={styles.filtersButton}
            onClick={() => setIsFilterPanelOpen(true)}
          >
            FILTERS
          </button>

          <SortDropdown />
        </div>

        <ProductList />
      </div>

      <div className={styles.largeDeviceFilterContainer}>
        <div className={styles.filterControls}>
          <button
            className={styles.hideFilterButton}
            onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
          >
            {isFilterPanelOpen ? (
              <>
                <MdKeyboardArrowLeft size={18} /> HIDE FILTERS
              </>
            ) : (
              <>
                <MdKeyboardArrowRight size={18} /> SHOW FILTERS
              </>
            )}
          </button>

          <SortDropdown />
        </div>

        <div
          className={`${styles.mainContentAreaWrapper} ${
            isFilterPanelOpen ? styles.panelOpenLayout : ""
          }`}
        >
          <div className={styles.filterPanelContainer}>
            {AllFilters.map((title) => (
              <FilterSection
                key={title}
                title={title}
                isOpen={!!openSections[title]}
                onToggle={() => toggleSection(title)}
                options={FilterOptions[title.replace(/\s/g, "_")]}
              />
            ))}
          </div>

          <ProductList />
        </div>
      </div>

      <MobileFilterModal
        isOpen={isFilterPanelOpen}
        onClose={() => setIsFilterPanelOpen(false)}
        openSections={openSections}
        toggleSection={toggleSection}
      />
    </div>
  );
};

export default Filters;
