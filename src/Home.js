import React from "react";
import {
  Grid,
  Header,
  Image,
  Segment,
  Embed
} from "semantic-ui-react";

import asciinema_landing_data from "./data/asciinema_landing";

export default class Home extends React.Component {
  componentDidMount() {
    document.title = "Home | PyFunceble";
  }

  createDemoRows() {
    return asciinema_landing_data.map(data => {
      return (
        <Grid.Row>
          <Grid.Column>
            <Header textAlign="center" size="large" as="h3">
              {data.title}
            </Header>
            <Embed
              url={data.link + '?cols=200&rows=47&theme=asciinema'}
              active={true}
            />
          </Grid.Column>
        </Grid.Row>
      )

    });
  }

  render() {
    return (
      <Segment basic padded='very'>
        <Grid container stackable verticalAlign="middle" centered>
          <Grid.Row centered>
            <Grid.Column textAlign="center">
              <Image.Group size='small'>
                <Image
                  as="a"
                  href="https://coveralls.io/github/funilrys/PyFunceble?branch=dev"
                  src="https://coveralls.io/repos/github/funilrys/PyFunceble/badge.svg?branch=dev"
                  alt="Coverage Status"
                />
                |
                <Image
                  as="a"
                  href="https://github.com/funilrys/PyFunceble/blob/master/LICENSE"
                  src="https://img.shields.io/github/license/funilrys/PyFunceble.svg"
                  alt="License"
                />
                <Image
                  as="a"
                  href="https://github.com/funilrys/PyFunceble/releases/latest"
                  src="https://img.shields.io/github/release/funilrys/PyFunceble.svg"
                  alt="GitHub release"
                />
                <Image
                  as="a"
                  href="hhttps://pepy.tech/project/pyfunceble-dev"
                  src="https://static.pepy.tech/personalized-badge/pyfunceble-dev?period=total&units=international_system&left_color=black&right_color=orange&left_text=⬇️%20(Total)"
                  alt="Total Downloads"
                />
                <Image
                  as="a"
                  href="hhttps://pepy.tech/project/pyfunceble-dev"
                  src="https://static.pepy.tech/personalized-badge/pyfunceble-dev?period=month&units=international_system&left_color=black&right_color=orange&left_text=⬇️%20(30%20Days)"
                  alt="Total Downloads"
                />
                <Image
                  as="a"
                  href="hhttps://pepy.tech/project/pyfunceble-dev"
                  src="https://static.pepy.tech/personalized-badge/pyfunceble-dev?period=week&units=international_system&left_color=black&right_color=orange&left_text=⬇️%20(7%20Days)"
                  alt="Total Downloads"
                />
              </Image.Group>
            </Grid.Column>
          </Grid.Row>

          {this.createDemoRows()}

          <Grid.Row>
            <Grid.Column>
              <Header textAlign="center" size="large" as="h3">
                And a lot more!
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
