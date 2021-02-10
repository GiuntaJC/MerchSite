import React from "react";
import NewMerchForm from "./NewMerchForm";
import MerchList from "./MerchList";

class NewMerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: "merchList",
      masterMerchList: [],
    };
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({
      masterMerchList: newMasterMerchList,
      formVisibleOnPage: "merchList",
    });
  };

  handleClick = (newState) => {
    this.setState(() => ({
      formVisibleOnPage: newState,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let pageTitle = "addMerch";
    let buttonText = "";
    if (this.state.formVisibleOnPage === "addMerch") {
      currentlyVisibleState = (
        <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />
      );
      pageTitle = "merchList";
      buttonText = "Return to Merch List";
    } else if (this.state.formVisibleOnPage === "merchList") {
      currentlyVisibleState = (
        <MerchList merchList={this.state.masterMerchList} />
      );
      pageTitle = "addMerch";
      buttonText = "Add Merch";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={() => this.handleClick(pageTitle)}>
          {buttonText}
        </button>
        {/* <button onClick={this.handleClickMerchList}>merchList</button> */}
      </React.Fragment>
    );
  }
}

// handleClickMerchList = () => {
//   this.setState(() => ({
//     formVisibleOnPage: "merchList",
//   }));
// };

// handleClickAddMerch = () => {
//   this.setState(() => ({
//     formVisibleOnPage: "addMerch",
//   }));
// };

export default NewMerchControl;
