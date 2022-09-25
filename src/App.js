import "./styles.css";

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hemanth",
      cards: ["Card-01", "Card-02", "Card-03"]
    };
  }
  handleClick = (e) => {
    console.log(e);
    var indexDel = this.state.cards.indexOf(e);
    this.state.cards.splice(indexDel, 1);
    var newCards = this.state.cards;
    this.setState({
      cards: newCards
    });
  };
  render() {
    return (
      <>
        {this.state.cards.map((item) => {
          return <li onClick={(e) => this.handleClick(item)}>{item}</li>;
        })}
      </>
    );
  }
}

export default App;
