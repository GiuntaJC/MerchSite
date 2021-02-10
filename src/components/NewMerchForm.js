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
        <div class="form-group">
          <h4>Name of merch</h4>
          <input
            type="text"
            name="name"
            placeholder="Name"
            class="form-control"
          />
          <br />
        </div>
        <div class="form-group">
          <h4>Description</h4>
          <input
            type="text"
            name="description"
            placeholder="Description"
            class="form-control"
          />
          <br />
        </div>
        <div class="form-group">
          <h4>Quantity</h4>
          <input type="number" name="quantity" class="form-control" />
          <br />
        </div>
        <div class="form-group">
          <h4>Price</h4>
          <input
            type="number"
            name="price"
            step="0.01"
            placeholder="$0.00"
            class="form-control"
          />
        </div>
        <br />

        <button class="btn btn-success" type="submit">
          Submit
        </button>
        <hr />
      </form>
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func,
};

export default NewMerchForm;
