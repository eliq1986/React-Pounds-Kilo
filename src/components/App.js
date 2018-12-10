import React, { Component } from 'react';
import 'normalize.css';
import './app.css';
import Form from './Form';
import Results from './Results';


class App extends Component {
  state = {
    pounds: null
  };

//receives input and converts to kilos; passed via props
convertLbsToKilograms = (pounds) => {
   const kilograms = pounds / 2.2;
   this.setState({pounds: kilograms.toFixed(2)});
 };


render() {
  return (
    <div>
    <div className="center-content"></div>
      <h1>Pounds to Kilograms</h1>
      <Form lbsToKilo={this.convertLbsToKilograms}/>
      <Results pounds={this.state.pounds}/>
    </div>
  );
 }
}

export default App;
