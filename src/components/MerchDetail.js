import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props) {
  const { merch, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h1>Merch Detail</h1>
      <h3>{merch.name}</h3>
      <h3>{merch.description}</h3>
      <h3>{merch.quantity}</h3>
      <h3>{merch.price}</h3>
      <button onClick={onClickingEdit}>edit merch</button>
      <button onClick={() => onClickingDelete(merch.id)}>delete merch</button>
      <hr />
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default MerchDetail;
