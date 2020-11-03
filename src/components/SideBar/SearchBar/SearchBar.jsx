import React from "react";
import styles from "./SearchBar.module.scss";
import { Input, Checkbox} from 'semantic-ui-react'


const SearchBar = (props) => {
const { updateDrinksText } = props;

  return (
    <>
    <div>
      <Input icon='search' placeholder='Search...' onInput={e => updateDrinksText(e.target.value)}  />  
    </div>

    </>

  );
};

export default SearchBar;
