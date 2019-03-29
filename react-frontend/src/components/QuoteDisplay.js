import React, { Component } from 'react';
import './css/QuoteDisplay.css';


const quotesSection = {
  paddingTop: "150px",
  height: "400px",
  width: "60%",
  color: "#333"
}


class QuoteDisplay extends Component {

  state = {
    loading: true,
  };

  async componentDidMount(){
    
    const url = "http://localhost:5000/get_quote";
    const response = await fetch(url)
    const data = await response.json();

    this.setState({quote: data, loading: false});
    console.log(data);
  }


  render(){
    return(
      <div className="quotesSection">
        <div className="quoteText"><em>{this.state.loading ? <div> Loading...</div> : <div>"{this.state.quote}"</div>}</em></div>
      </div>
    )
  }
}


export default QuoteDisplay;
