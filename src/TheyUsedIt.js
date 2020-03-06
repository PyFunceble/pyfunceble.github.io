import React from "react";
import { Divider, Header, Card, Segment } from "semantic-ui-react";

import they_use_d_it_data from "./data/users.json";
import Contributors from "./Contributors";

export default class TheyUsedIt extends React.Component {
  entities() {
    return Contributors.getCards(they_use_d_it_data.entities, "users", "teal");
  }

  human() {
    return Contributors.getCards(they_use_d_it_data.human, "user", "green");
  }

  render() {
    return (
      <Segment basic padded="very">
        <Header textAlign="center" as="h2" content="They use-d PyFunceble!" />
        <Card.Group
          textAlign="center"
          centered
          stackable
          itemsPerRow={4}
          children={this.entities()}
        />
        <Divider section />
        <Card.Group
          textAlign="center"
          centered
          stackable
          itemsPerRow={4}
          children={this.human()}
        />
      </Segment>
    );
  }
}
