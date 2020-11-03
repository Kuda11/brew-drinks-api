import React, { useState, useEffect } from 'react';
import styles from './App.module.scss'
import DashBoard from './components/DashBoard'
import SideBar from './components/SideBar'
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar';

const App = () => {
  const [drinks, setDrinks] = useState([])
  useEffect(() => {
     fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then((res) => {
      setDrinks(res)
      console.log("first one")
    } );
  }, [])

  const grabDrinks = (searchTerm) => {
    if (searchTerm === "") {
      return
    } else {
      fetch("https://api.punkapi.com/v2/beers/?beer_name=" + searchTerm)
      .then((res) => res.json())
      .then((res) => {
        setDrinks(res)
        console.log("getDrinksByName was called")
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };
  return (
    <div>
    <NavBar/>  
    <div className={styles.gridHomePage}>
    <SideBar updateDrinksText={grabDrinks}/>       
    <DashBoard drinks={drinks} />
    </div>
    </div>


  );
}

export default App;
