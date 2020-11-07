import React from "react";
import CardItem from './CardItem'
import { Card } from 'semantic-ui-react'

const DashBoard = (props) => {
  const { drinks } = props;

  return (
    <section >
      <Card.Group itemsPerRow={1}>
        {drinks.map(drink => {
          return (
            <Card className="cardContainer" raised>
              <CardItem drinks={drink} />
            </Card>
          )
        })}
        </Card.Group>
    </section>
  );
};

export default DashBoard;
