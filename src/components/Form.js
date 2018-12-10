import React, { Component } from 'react';

class Form extends Component {
  state = {
    amount: 0
  };


// handles form submission
  submitFormHandler = (event) => {
    if (this.state.amount) {
      event.preventDefault();
      this.props.lbsToKilo(this.state.amount);
      this.setState({amount: 0});
    };
};

  render() {
  return (
    <form onSubmit={this.submitFormHandler}>
     <label htmlFor="weight" >Enter Weight:</label>
     <input name="weight" value={this.state.amount}
       type="number"
       onChange={(event)=> this.setState({amount: event.target.value})}
       />
     <input type="submit" value="Submit"/>
    </form>
  );
 }
}

export default Form;