import React, { Component } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import "./HeaderMenu.css";

class HeaderMenu extends Component {
  render() {
    const activeItem = this.props.location.pathname;
    return <nav className="HeaderMenu">
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item className="brandName" header>
              <Icon name="gem" />Palatial Homes, LLC
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item name="home" active={activeItem === "/"} link>
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item name="about" active={activeItem === "/about"} link>
                <NavLink to="/about">About</NavLink>
              </Menu.Item>
              <Menu.Item name="listings" active={activeItem === "/listings"} link>
                <NavLink to="/listings">Listings</NavLink>
              </Menu.Item>
              <Menu.Item name="contact" active={activeItem === "/contact"} link>
              <NavLink to="/contact">Contact</NavLink>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </nav>;
  }
}

export default withRouter(HeaderMenu);
