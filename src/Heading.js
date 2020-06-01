import PropTypes from "prop-types";
import React from "react";
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Image,
} from "semantic-ui-react";

export default class Heading extends React.Component {
  render() {
    return (
      <Container text>
        <Image
          src="https://raw.githubusercontent.com/PyFunceble/logo/master/Green/HD/RM.png"
          size="huge"
          centered
        />
        <Header
          as="h2"
          content="The tool to check the availability or syntax of domains, IP or URL"
          inverted
          style={{
            fontSize: this.props.mobile ? "1.7em" : "1.9em",
            fontWeight: "normal",
            // marginTop: mobile ? "0.5em" : "1.5em"
          }}
        />
        <Button
          as="a"
          color="blue"
          size="huge"
          href="https://github.com/funilrys/PyFunceble"
        >
          <Icon inverted name="github" /> View on GitHub
        </Button>
        <Button
          color="green"
          as="a"
          size="huge"
          href="https://pyfunceble.readthedocs.io/"
        >
          <Icon inverted name="book" />
          Documentation
        </Button>

        <Divider horizontal inverted>
          Get It
        </Divider>

        <Button
          as="a"
          color="blue"
          size="huge"
          href="https://pypi.org/project/PyFunceble/"
        >
          <Icon inverted name="python" />
          PyPi
        </Button>
        <Button
          as="a"
          color="orange"
          size="huge"
          href="https://github.com/funilrys/PyFunceble/releases/latest"
        >
          <Icon inverted name="zip" />
          Download
        </Button>
        <Button
          as="a"
          color="teal"
          size="huge"
          href="https://aur.archlinux.org/packages/pyfunceble"
        >
          <Icon inverted className="fl-archlinux" />
          AUR
        </Button>

        <Divider horizontal inverted></Divider>

        <Button
          as="a"
          color="blue"
          size="huge"
          href="https://hub.docker.com/r/pyfunceble/pyfunceble"
        >
          <Icon inverted className="docker" />
          Docker
        </Button>
        <Button
          as="a"
          color="green"
          size="huge"
          href="https://anaconda.org/pyfunceble/pyfunceble"
        >
          Anaconda
        </Button>
      </Container>
    );
  }
}

Heading.propTypes = {
  mobile: PropTypes.bool,
};
