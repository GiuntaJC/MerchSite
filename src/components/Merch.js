import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenMerchSelected(props.id)}>
        <h4>Name: {props.name}</h4>
        <h5>Description: {props.description}</h5>
        <p>Price: {props.price}</p>
        <p>Quantity: {props.quantity}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenMerchSelected: PropTypes.func,
};

export default Merch;
