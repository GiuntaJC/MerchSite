import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props) {
  return (
    <React.Fragment>
      <h1>Merch List</h1>
      <hr />
      {props.merchList.map((merch, index) => (
        <Merch
          name={merch.name}
          description={merch.description}
          quantity={merch.quantity}
          price={merch.price}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}
MerchList.propTypes = { merchList: PropTypes.array };
export default MerchList;
