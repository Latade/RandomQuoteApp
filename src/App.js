import React from "react";
import "./index.css";
import "./App.css";

const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: null,
      randomQuote: null,
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          quotes: data.quotes,
        });
      });
  }

  randomQuoteHandler = () => {
    const randNumb = Math.floor(Math.random() * this.state.quotes.length);
    const randomQuote = this.state.quotes[randNumb];

    this.setState({
      randomQuote: randomQuote,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1>RANDOM QUOTE APP</h1>
        </div>
        <div className="ContentGroup">
          <div className="Quote">
            <img
              src={require("./images/quote-left.svg")}
              width="30px"
              alt="left"
            />
            <div className="Text">
              {this.state.randomQuote !== null && this.state.randomQuote.quote}
            </div>

            <img
              src={require("./images/quote-right.svg")}
              width="30px"
              alt="right"
            />
          </div>

          <div className="Author">
            - {this.state.randomQuote !== null && this.state.randomQuote.author}
          </div>
        </div>
        <button onClick={this.randomQuoteHandler}>NEXT QUOTE</button>
      </div>
    );
  }
}

export default App;
