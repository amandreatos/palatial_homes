import React from "react";
import { Link } from "react-router-dom";
import "./ListingCard.css";

const ListingCard = props => {
  return (
    <div className="ListingCard">
      <div className="CardHeader">
              <img src={`${props.listing.image}`} alt={props.listing.street} />
      </div>
      <div className="CardDetail">
        <h5>{props.listing.street}</h5>
        <p>{props.listing.city}, {props.listing.state} {props.listing.zipcode}</p>
        <p>{props.listing.sqft} square feet</p>
      </div>
      <div className="CardFooter">
              <Link className="button ui green" to={`/listings/${props.listing.id}`}>View Detail</Link>
        <button className="button ui basic">Preview</button>
      </div>
    </div>
  );
};

export default ListingCard;
