import React from 'react';
import styles from './App.module.scss'
import DashBoard from './components/DashBoard'
import SideBar from './components/SideBar'

const App = () => {

  return (
    <div className={styles.gridHomePage}>
    <DashBoard />
    <SideBar />
    </div>

  );
}

export default App;