import PropTypes from "prop-types";
import React from "react";
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import Heading from "./Heading";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends React.Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 400, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item
                  as={NavLink}
                  to="/"
                  activeClassName="active"
                  exact={true}
                >
                  Home
                </Menu.Item>
                <Menu.Item as="a" href="https://pyfunceble.readthedocs.io/">
                  Documentation
                </Menu.Item>
                <Menu.Item
                  as={NavLink}
                  to="/contributors"
                  activeClassName="active"
                  exact={true}
                >
                  Contributors
                </Menu.Item>
                <Menu.Item
                  as={NavLink}
                  to="/special-thanks"
                  activeClassName="active"
                  exact={true}
                >
                  Special Thanks
                </Menu.Item>
                <Menu.Item
                  as={NavLink}
                  to="/they-use-d-it"
                  activeClassName="active"
                  exact={true}
                >
                  They use-d it!
                </Menu.Item>
                <Menu.Item
                  as={NavLink}
                  to="/they-talk-ed-about-it"
                  activeClassName="active"
                  exact={true}
                >
                  They talk-ed about it!
                </Menu.Item>
              </Container>
            </Menu>
            <Heading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends React.Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={NavLink} to="/" activeClassName="active" exact={true}>
            Home
          </Menu.Item>
          <Menu.Item as="a" href="https://pyfunceble.readthedocs.io/">
            Documentation
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/contributors"
            activeClassName="active"
            exact={true}
          >
            Contributors
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/special-thanks"
            activeClassName="active"
            exact={true}
          >
            Special Thanks
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/they-use-d-it"
            activeClassName="active"
            exact={true}
          >
            They use-d it!
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="/they-talk-ed-about-it"
            activeClassName="active"
            exact={true}
          >
            They talk-ed about it!
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            <Heading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer;
