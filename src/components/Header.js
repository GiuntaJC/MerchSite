import React from "react";

function Header(props) {
  const headerStyles = {
    backgroundColor: "#008b8b",
    fontFamily: "sans-serif",
    paddingTop: "50pxs",
  };

  return (
    <div style={headerStyles}>
      <h1>Get yo Merch</h1>
    </div>
  );
}
export default Header;
