import React, {Component} from 'react';
import '../css/QuoteDisplay.css';



class QuoteDisplay extends Component {

  state = {
    loading: true,
  };

  async componentDidMount(){
    const url = "/get_quote";
    //const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

    const response = await fetch(url)
    const data = await response.json();

    this.setState({quote: data[0], loading: false});
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
