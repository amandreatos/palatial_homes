import React, { Component } from "react";
import { Container, Grid, Loader } from "semantic-ui-react";
import ListingCard from "../../components/ListingCard/ListingCard";
import "./HouseListings.css";

class HouseListings extends Component {
  render() {
    let listings = <Loader size="large" content="Loading" active />;
    if (this.props.listings) {
      listings = this.props.listings.map(i => {
        return (
          <Grid.Column width={5} key={i.id}>
            <ListingCard listing={i} />
          </Grid.Column>
        );
      });
    }
    console.log(this.props.listings);
    return (
      <div className="HouseListings">
        <Container>
          <Grid centered columns="equal">
            {listings}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default HouseListings;
