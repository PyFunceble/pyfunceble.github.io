import React from "react";
import {
  Grid,
  Header,
  Image,
  Segment,
  Embed
} from "semantic-ui-react";

export default class Home extends React.Component {
  componentDidMount() {
    document.title = "Home | PyFunceble";
  }

  render() {
    return (
        <Segment basic padded='very'>
          <Grid container stackable verticalAlign="middle" centered>
            <Grid.Row centered>
              <Grid.Column textAlign="center">
                <Image
                  as="a"
                  href="https://travis-ci.com/funilrys/PyFunceble"
                  src="https://travis-ci.com/funilrys/PyFunceble.svg?branch=master"
                  alt="Build Status"
                />
                <Image
                  as="a"
                  href="https://coveralls.io/github/funilrys/PyFunceble?branch=master"
                  src="https://coveralls.io/repos/github/funilrys/PyFunceble/badge.svg?branch=master"
                  alt="Coverage Status"
                />
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
                  href="https://github.com/psf/black"
                  src="https://img.shields.io/badge/code%20style-black-000000.svg"
                  alt="Code style | Black"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header textAlign="center" size="large" as="h3">
                  PyFunceble gives you the availability of a domain!
                </Header>
                <Embed
                  url="https://asciinema.org/a/cx4FBM7FqRNTYbpT9d8KI834S/iframe"
                  active={true}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header textAlign="center" size="large" as="h3">
                  PyFunceble gives you the availability of an IPv4!
                </Header>
                <Embed
                  url="https://asciinema.org/a/hoBvo6l4H3dgUU2GHBFRUVtfE/iframe"
                  active={true}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header textAlign="center" size="large" as="h3">
                  PyFunceble gives you the availability of a URL!
                </Header>
                <Embed
                  url="https://asciinema.org/a/leyyGQZopcF6JtXVZCLcx8ajp/iframe"
                  active={true}
                />
              </Grid.Column>
            </Grid.Row>
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
