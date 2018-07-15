import React, { Component } from "react";
import HouseListings from "../../components/HouseListings/HouseListings";
import { Route } from "react-router-dom";
import "./Listings.css";

class Listings extends Component {
  render() {
    return (
        <section className="Listings">
            <h1>Current Listings</h1>
            <HouseListings listings={this.props.listings} />
      </section>
    );
  }
}

export default Listings;
