import React from "react";
import styles from "./DashBoard.module.scss";
import CardItem from './CardItem'
import { Card } from 'semantic-ui-react'

const DashBoard = (props) => {
  const { drinks } = props;

  return (
    <>
    <section className={styles.cardContainer}>
      <Card.Group itemsPerRow={1}>
      {drinks.map(drink => {
        return (
          <Card className="cardContainer" raised>
            <CardItem className={styles.CardItem} drinks={drink} />
          </Card>

        )
      })}
      </Card.Group>

    </section>
    </>
  );
};

export default DashBoard;
