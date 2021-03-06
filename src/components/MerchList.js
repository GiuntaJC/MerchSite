import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props) {
  return (
    <React.Fragment>
      <h1>Merch List</h1>
      <hr />
      {props.merchList.map((merch) => (
        <Merch
          whenMerchSelected={props.onMerchSelection}
          name={merch.name}
          description={merch.description}
          quantity={merch.quantity}
          price={merch.price}
          id={merch.id}
          key={merch.id}
        />
      ))}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onMerchSelection: PropTypes.func,
};
export default MerchList;
