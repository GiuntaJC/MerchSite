import React from "react";
import NewMerchForm from "./NewMerchForm";
import MerchList from "./MerchList";
import MerchDetail from "./MerchDetail";

class NewMerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: "merchList",
      masterMerchList: [],
      selectedMerch: null,
    };
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({
      masterMerchList: newMasterMerchList,
      formVisibleOnPage: "merchList",
    });
  };

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.masterMerchList.filter(
      (merch) => merch.id === id
    )[0];
    this.setState({ selectedMerch: selectedMerch });
  };

  handleClick = (newState) => {
    this.setState(() => ({
      formVisibleOnPage: newState,
      selectedMerch: null,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let pageTitle = "addMerch";
    let buttonText = "";
    if (this.state.selectedMerch != null) {
      currentlyVisibleState = <MerchDetail merch={this.state.selectedMerch} />;
      pageTitle = "merchList";
      buttonText = "details page";
    } else if (this.state.formVisibleOnPage === "addMerch") {
      currentlyVisibleState = (
        <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />
      );
      pageTitle = "merchList";
      buttonText = "Return to Merch List";
    } else if (this.state.formVisibleOnPage === "merchList") {
      currentlyVisibleState = (
        <MerchList
          merchList={this.state.masterMerchList}
          onMerchSelection={this.handleChangingSelectedMerch}
        />
      );
      pageTitle = "addMerch";
      buttonText = "Add Merch";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {console.log(pageTitle)}
        {console.log(currentlyVisibleState)}
        <button
          className="btn btn-primary"
          onClick={() => this.handleClick(pageTitle)}
        >
          {buttonText}
        </button>
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
