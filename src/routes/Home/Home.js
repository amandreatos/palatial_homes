import React, { Component } from "react";
import { Container, Icon } from "semantic-ui-react";
import HomeHero from "../../assets/images/nzr-home-hero.jpg";
import HouseListings from "../../components/HouseListings/HouseListings";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <section className="Home">
        <div className="homeHero">
          <div
            style={{ backgroundImage: `url(${HomeHero})` }}
            className="bgImage"
          />
          <div className="bgBack" />
          <h1>
            <Icon name="gem" />
            Palatial Homes
          </h1>
        </div>
        <div className="FeaturedListings">
            <h2>Featured Listings</h2>
            <HouseListings count={3} listings={this.props.listings} />
        </div>
      </section>
    );
  }
}

export default Home;
