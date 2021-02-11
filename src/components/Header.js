import React from "react";

function Header(props) {
  const headerStyles = {
    backgroundColor: "#008b8b",
    fontFamily: "sans-serif",
    padding: "2%",
    textAlign: "center",
    marginBottom: "5%",
  };

  return (
    <div style={headerStyles}>
      <h1>Steely Led Fire</h1>
      <h2>Get all your Steely Dan, Arcade Fire, and Led Zeppelin Merch!</h2>
    </div>
  );
}

export default Header;
