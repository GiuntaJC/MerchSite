import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewMerchForm(props) {
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      price: event.target.price.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewMerchFormSubmission}>
        <p>Name of merch</p>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <p>Description</p>
        <input type="text" name="description" placeholder="Description" />
        <br />
        <p>Quantity</p>
        <input type="number" name="quantity" />
        <br />
        <p>Price</p>
        <input type="number" name="price" step="0.01" placeholder="$0.00" />
        <br />

        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func,
};

export default NewMerchForm;
