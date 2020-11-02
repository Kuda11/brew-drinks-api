import React from "react";
import styles from "./SideBar.module.scss";
import SearchBar from './SearchBar'


const SideBar = (props) => {
const {updateDrinksText}=props;

  return (
    <>
    <SearchBar updateDrinksText={updateDrinksText}/>
    </>
  );
};

export default SideBar;
