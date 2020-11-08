import React, { useState, useEffect } from 'react';
import styles from './App.module.scss'
import DashBoard from './components/DashBoard'
import SideBar from './components/SideBar'
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar';
import { Dimmer, Card, Loader } from 'semantic-ui-react';

const App = () => {
  const [drinks, setDrinks] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then((res) => {
        setDrinks(res)
        setLoading(false)
      });
  }, [])

  const grabDrinks = (searchTerm) => {
    if (searchTerm === "") {
      return
    } else {
      fetch("https://api.punkapi.com/v2/beers/?beer_name=" + searchTerm)
        .then((res) => res.json())
        .then((res) => {
          setDrinks(res)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (loading) {
    return (
      <div>
        <NavBar />
        <div className={styles.gridHomePage}>
          <SideBar />
          <section >
            <Card.Group itemsPerRow={1}>
              <Dimmer active>
                <Loader size='massive' >Loading</Loader>
              </Dimmer>
            </Card.Group>
          </section>
        </div>
      </div>
    )
  }
  return (
    <div>
      <NavBar />
      <div className={styles.gridHomePage}>
        <SideBar updateDrinksText={grabDrinks} />
        <DashBoard drinks={drinks} />
      </div>
    </div>


  );
}

export default App;
