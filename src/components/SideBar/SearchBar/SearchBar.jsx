import React from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const SearchBar = () => {


  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="search..." />
      <button>search</button> 
    </div>
    
  );
};

export default SearchBar;
