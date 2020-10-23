import React from "react";
import styles from "./SideBar.module.scss";
import SearchBar from './SearchBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const SideBar = () => {


  return (
    <>
    <SearchBar />
    </>
  );
};

export default SideBar;
