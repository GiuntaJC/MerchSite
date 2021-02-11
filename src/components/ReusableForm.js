import React from'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
      <br />
    </React.Fragment>
  );
}

ReusableForm.propTypes = { 
  formSubmissionHandler: PropTypes.func, 
  buttonText: PropTypes.string
}

export default ReusableForm; 