import React from "react";
import Header from "./Header";
import NewMerchControl from "./NewMerchControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div class="container">
        <NewMerchControl />
      </div>
    </React.Fragment>
  );
}

export default App;
