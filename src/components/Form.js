import React, { Component } from 'react';

import './Form.scss';

class Form extends Component {
  // sets up initial state
  state = {
    amount: 0
  };


// handles form submission
  submitFormHandler = (event) => {
      event.preventDefault();
      this.props.lbsToKilo(this.state.amount);
      this.setState({amount: 0});

};

  render() {
       return (
         <form onSubmit={this.submitFormHandler}>
          <label htmlFor="weight" >Enter Weight:</label>
          <input name="weight" value={this.state.amount}
            type="text"
            onChange={(event)=> this.setState({amount: event.target.value})}
            />
          <input type="submit" value="Submit"/>
         </form>
       );
     }
}

export default Form;
