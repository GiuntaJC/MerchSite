import React from "react";
import NewMerchForm from "./NewMerchForm";
import MerchList from "./MerchList";
import MerchDetail from "./MerchDetail";
import EditMerchForm from './EditMerchForm'; 

class NewMerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: "merchList",
      masterMerchList: [],
      selectedMerch: null,
      editing: false
    };
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true}); 
  } 
  
//adding new merch to list and show updated list
  handleAddingNewMerchToList = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({
      masterMerchList: newMasterMerchList,
      formVisibleOnPage: "merchList", //false
    });
  };
  
//details, shows selected merch details
  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.masterMerchList.filter(
      (merch) => merch.id === id
    )[0];
    this.setState({ selectedMerch: selectedMerch });
  };

  handleBuySelectedMerch = (id) => {
    const selectedMerch = this.state.masterMerchList.filter(
      (merch) => merch.id === id
    )[0];
    selectedMerch.quantity--;
  }
  
//what to do show on click
  handleClick = (newState) => {
    this.setState(() => ({
      formVisibleOnPage: newState,
      selectedMerch: null,
      editing: null, 
    }));
  };

//  handleClick = () => {
//     if (this.state.selectedTicket != null) {
//       this.setState({
//         formVisibleOnPage: false,
//         selectedTicket: null
//       });
//     } else {
//       this.setState(prevState => ({
//         formVisibleOnPage: !prevState.formVisibleOnPage,
//       }));
//     }
//   }
// ...
  
//find specific merch and show updated merch list
  handleDeletingMerch = (id) => {
    const newMasterMerchList = this.state.masterMerchList.filter(
      (merch) => merch.id !== id
    );
    this.setState({
      masterMerchList: newMasterMerchList,
      selectedMerch: null,
    });
  };

  handleEditingMerchInList = (merchToEdit) => {
    const editedMasterMerchList = this.state.masterMerchList
      .filter(merch => merch.id !== this.state.selectedMerch.id)
      .concat(merchToEdit);
    this.setState({
      masterMerchList: editedMasterMerchList,
      editing: false,
      selectedMerch: null
    });
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.masterMerchList.filter(
      (merch) => merch.id === id
    )[0];
    this.setState({ selectedMerch: selectedMerch });
  };

  //Buy function, not implemented 
  // handleBuySelectedMerch = () => {
  //   const boughtMerch = this.state.selectedMerch; 
  //   // const editedMasterMerchList = 
  //   // replace merch in master list 
  //   this.setState({
  //     masterMerchList: editedMasterMerchList
  //   })
  // }


  render() {
    let currentlyVisibleState = null;
    let pageTitle = "addMerch";
    let buttonText = "";
    if(this.state.editing) {
      currentlyVisibleState = <EditMerchForm merch= {this.state.selectedMerch} onEditMerch = {this.handleEditingMerchInList}/>
      pageTitle = "merchList";
      buttonText = "return to merch list";
    } else if (this.state.selectedMerch != null) {
      currentlyVisibleState = (
        <MerchDetail
          merch={this.state.selectedMerch}
          onClickingDelete={this.handleDeletingMerch}
          onClickingEdit={this.handleEditClick}
        />
      );
      pageTitle = "merchList";
      buttonText = "return to merch list";
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
