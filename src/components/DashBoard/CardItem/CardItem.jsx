import React from "react";
import styles from "./CardItem.module.scss";
import { Grid, Card, Image } from 'semantic-ui-react'

const CardItem = (props) => {
  const {
    name,
    image_url,
    description,
    tagline,
    first_brewed,
    abv
  } =props.drinks
  return (
    <>
    <Grid>
      <Grid.Column centered width={4}>
        <Image className='img' src={image_url}/>   
      </Grid.Column>
      <Grid.Column width={9}>
        <h2>{name}</h2>
        <h3>Made In:{first_brewed}</h3>
        <p>{abv}%</p>
        <p>{description}</p>
      </Grid.Column>
    </Grid>
    </>
  );
};

export default CardItem;
