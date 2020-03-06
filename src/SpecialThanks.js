import React from "react";
import { Divider, Header, Card, Segment, List } from "semantic-ui-react";

import special_thanks_data from "./data/special_thanks.json";
import Contributors from "./Contributors";

export default class SpecialThanks extends React.Component {
  entities() {
    return Contributors.getCards(special_thanks_data.entities, "users", "teal");
  }

  human() {
    return Contributors.getCards(special_thanks_data.human, "user", "orange");
  }

  tools() {
    return Contributors.getCards(special_thanks_data.tools, "wrench", "green");
  }

  componentDidMount() {
    document.title = "Special Thanks | PyFunceble";
  }

  render() {
    return (
      <div>
        <Segment basic padded="very" textAlign="center" attached="top">
          <Header
            textAlign="center"
            as="h2"
            content="Thanks to those awesome organizations, tools and people for:"
          />
          <List bulleted>
            <List.Item>Their awesome documentation</List.Item>
            <List.Item>Their awesome repository</List.Item>
            <List.Item>Their awesome tool/software/source code</List.Item>
            <List.Item>Their breaking reports</List.Item>
            <List.Item>Their contributions</List.Item>
            <List.Item>Their current work/purpose</List.Item>
            <List.Item>Their promotion of Py-Funceble</List.Item>
            <List.Item>Their support</List.Item>
            <List.Item>Their testings reports</List.Item>
          </List>
          which helped and/or still help me build, test and or make PyFunceble a
          better tool.
        </Segment>
        <Segment basic padded="very" attached>
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
          <Divider section />
          <Card.Group
            textAlign="center"
            centered
            stackable
            itemsPerRow={4}
            children={this.tools()}
          />
        </Segment>
      </div>
    );
  }
}
