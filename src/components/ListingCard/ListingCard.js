import React from "react";
import { Modal, Header, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ListingCard.css";

const ListingCard = props => {
  return (
    <div className="ListingCard">
      <div className="CardHeader">
        <img src={`${props.listing.image}`} alt={props.listing.street} />
      </div>
      <div className="CardDetail">
        <div className="ListingHeader">
          <h4>{props.listing.street}</h4>
          <h5 className="listingPrice">${props.listing.price}</h5>
        </div>
        <p>
          {props.listing.city}, {props.listing.state} {props.listing.zipcode}
        </p>
      </div>
      <div className="CardFooter">
        <Link className="button ui green" to={`/listings/${props.listing.id}`}>
          View Detail
        </Link>
        <Modal
          trigger={<button className="button ui basic">Preview</button>}
          basic
          size="large"
          closeIcon
        >
          <Header icon="map marker alternate" content={props.listing.street} />
          <Modal.Content>
            <div className="ListingPreview">
              <div className="PreviewImage">
                <img
                  src={`${props.listing.image}`}
                  alt={props.listing.street}
                />
              </div>
              <div className="PreviewDetail">
                <h4>
                  {props.listing.street}
                  <br />
                  {props.listing.city}, {props.listing.state}{" "}
                  {props.listing.zipcode}
                </h4>
                <p>
                  <strong>Current Price: </strong> ${props.listing.price}
                </p>
                <p>
                  <strong>Square Footage: </strong>
                  {props.listing.sqft} sqft.
                </p>
                <p>
                  <strong>Bedrooms: </strong>
                  {props.listing.bed} Beds
                </p>
                <p>
                  <strong>Bathrooms: </strong>
                  {props.listing.bath} Baths
                </p>
                <Link
                  className="button ui green DetailButton"
                  to={`/listings/${props.listing.id}`}
                >
                  View Detail
                </Link>
              </div>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
};

export default ListingCard;
