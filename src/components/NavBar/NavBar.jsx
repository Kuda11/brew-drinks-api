import React from "react";
import { Menu, Image } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu size='large' >
    <Image
      centered
      size='small'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRyfXWxic6dWz-WEmJ0BLqOrts_EhwT68znQ&usqp=CAU'
    />
    </Menu>
  );
};

export default NavBar;
