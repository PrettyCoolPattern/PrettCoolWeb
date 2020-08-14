import React, { Component, Fragment } from "react";
import { Route } from 'react-router-dom';
import scriptLoader from 'react-async-script-loader';
// WIP import paypal from 'paypal-checkout';

class PayPalButton extends Component {

 render(){
  
    return (
       
<iframe src="./PayPalButton.html" height="200" frameBorder="transparent" width="100%"></iframe>

    );
 }
}

export default PayPalButton;
