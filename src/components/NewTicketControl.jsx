import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions.jsx';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisibileOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   this.setState({formVisibileOnPage: true});
  //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibileOnPage);
  // }

  render(){
    return(
      <ConfirmationQuestions/>
    );
  }
}

export default NewTicketControl;
