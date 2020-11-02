import React from "react";
import styles from "./SearchBar.module.scss";
import { Input } from 'semantic-ui-react'


const SearchBar = (props) => {
const { updateDrinksText } = props;

  return (
    <Input icon='search' placeholder='Search...' onInput={e => updateDrinksText(e.target.value)}  />
  );
};

export default SearchBar;
