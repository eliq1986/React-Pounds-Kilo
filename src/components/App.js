import React, { Component } from 'react';
import 'normalize.css';
import './app.css';
import Form from './Form';
import Results from './Results';
import NoResults from './NoResults';


class App extends Component {

// sets up initial state
  state = {
    pounds: 0,
    correctInput: true
  };


//receives input and converts to kilos; passed via props
convertLbsToKilograms = (pounds) => {
   if (pounds && !isNaN(pounds)) {
     const kilograms = pounds / 2.2;
     this.setState({
     pounds: kilograms.toFixed(2),
     correctInput: true
   });
 } else {
   this.setState({correctInput: false});
 }

 };


// dynamic rendering depending on the input value
renderResult = () => {
   if (this.state.correctInput) {
     return <Results pounds={this.state.pounds} />
   }
    return <NoResults />
};


render() {
  return (
    <div>
    <div className="center-content"></div>
      <h1>Pounds to Kilograms</h1>
      <Form  lbsToKilo={this.convertLbsToKilograms}/>
        {this.renderResult()}
    </div>
  );
 }
}

export default App;
