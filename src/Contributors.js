import React from "react";
import {
  Divider,
  Header,
  Icon,
  Image,
  Segment,
  Card,
  List
} from "semantic-ui-react";

import contributors_data from "./data/contributors";

export default class Contributors extends React.Component {
  static sortByFullName(to_sort) {
    to_sort.sort(function(a, b) {
      a = a.full_name.toLowerCase();
      b = b.full_name.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });

    return to_sort;
  }

  static getCards(dataset, label_icon, label_color) {
    if (dataset) {
      return this.sortByFullName(dataset).map(info => {
        return (
          <Card>
            {"avatar" in info && info.avatar && (
              <Image
                src={info.avatar}
                wrapped
                label={{
                  as: "div",
                  corner: "left",
                  icon: label_icon,
                  color: label_color
                }}
                fluid
              />
            )}
            <Card.Content textAlign="center">
              <Card.Header>{info.full_name}</Card.Header>
              {"description" in info && info.description}
              {"description" in info &&
                "links" in info &&
                info.links &&
                "named" in info.links && <Divider />}
              {"named" in info.links && info.links.named && (
                <List bulleted>
                  {info.links.named.map(info => (
                    <List.Item as="a" href={info.link}>
                      {info.description}
                    </List.Item>
                  ))}
                </List>
              )}
            </Card.Content>
            {"links" in info &&
              info.links &&
              ("github" in info.links ||
                "external" in info.links ||
                "gitlab" in info.links) && (
                <Card.Content textAlign="center" extra>
                  {"github" in info.links && info.links.github && (
                    <a href={info.links.github}>
                      <Icon size="large" name="github" />
                    </a>
                  )}
                  {"gitlab" in info.links && info.links.gitlab && (
                    <a href={info.links.gitlab}>
                      <Icon size="large" name="gitlab" />
                    </a>
                  )}
                  {"external" in info.links &&
                    info.links.external &&
                    info.links.external.map(external_link => (
                      <a href={external_link}>
                        <Icon size="large" name="external" />
                      </a>
                    ))}
                </Card.Content>
              )}
          </Card>
        );
      });
    }
    return;
  }

  core_developer() {
    return this.constructor.getCards(
      contributors_data.core_developers,
      "star",
      "yellow"
    );
  }

  contributors() {
    return this.constructor.getCards(
      contributors_data.contributors,
      "bolt",
      "orange"
    );
  }

  componentDidMount() {
    document.title = "Contributors | PyFunceble";
  }

  render() {
    return (
      <Segment basic padded="very">
        <Header
          textAlign="center"
          as="h2"
          content="They contribute-d to PyFunceble!"
        />
        <Card.Group
          textAlign="center"
          centered
          stackable
          itemsPerRow={4}
          children={this.core_developer()}
        />
        <Divider section />
        <Card.Group
          textAlign="center"
          centered
          stackable
          itemsPerRow={4}
          children={this.contributors()}
        />
      </Segment>
    );
  }
}
