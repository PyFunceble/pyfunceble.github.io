import React from "react";
import { Divider, Header, Card, Segment } from "semantic-ui-react";

import talks_data from "./data/talks.json";
import Contributors from "./Contributors";

export default class TheyTalkedAboutIt extends React.Component {
  featured() {
    return Contributors.getCards(talks_data.featured, "star", "yellow");
  }

  others() {
    return Contributors.getCards(talks_data.other, "feed", "green");
  }

  render() {
    return (
      <Segment basic padded="very">
        <Header
          textAlign="center"
          as="h2"
          content="They talk-ed about PyFunceble!"
        />
        <Card.Group
          textAlign="center"
          centered
          stackable
          itemsPerRow={4}
          children={this.featured()}
        />
        <Divider section />
        <Card.Group
          textAlign="center"
          centered
          stackable
          itemsPerRow={4}
          children={this.others()}
        />
      </Segment>
    );
  }
}
