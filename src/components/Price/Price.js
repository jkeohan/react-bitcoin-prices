import React, {useEffect} from "react";
import axios from "axios";
import "./Price.css";

const coindeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";

function Price(){

  useEffect(() => {
    const currency = props.match.params.currency;
    const url = `${coindeskURL}${currency}.json`

    fetch(url)
      .then(response => response.json())
      .then(response => {
        let newPrice = response.bpi[currency].rate;
        props.setPrice(newPrice)
      })
  },[])

    return (
      <div>
        <h1>Bitcoin price in {props.match.params.currency}</h1>
        <div className="price">{props.price}</div>
      </div>
    )
}

export default Price;
