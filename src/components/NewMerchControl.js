import React from 'react';
import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList'; 

class NewMerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: '',
      masterMerchList: []
    };
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({
      masterMerchList: newMasterMerchList,
      formVisibleOnPage: "merchList"
    });
  };

  handleClickMerchList = () => {
    this.setState( () => ({
      formVisibleOnPage: "merchList"
    }));
  };

  handleClickAddMerch = () => {
    this.setState( () => ({
      formVisibleOnPage: "addMerch"
    }));
  };

  // handleClick = (newState) => {
  //   this.setState(() => ({
  //     formVisibleOnPage: newState
  //   }));
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage === "addMerch") {
      currentlyVisibleState = (
        <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList}/> 
      );
      buttonText = "Return to Merch List";
    } else if (this.state.formVisibleOnPage === "merchList") {
      currentlyVisibleState = (
        <MerchList merchList={this.state.masterMerchList}/>
      );
      buttonText = 'Add merch'; 
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClickAddMerch}>Add Merch</button>
      </React.Fragment>
    );
  }
}
export default NewMerchControl;