import "./styles.css";
import React from "react";
import { Modal } from "./Modal";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: ["Card 1", "Card 2", "Card 3", "Card 4"],
      task: ["Sing a song", "Dance", "Fight", "Music"],
      Participent: ["Hemanth", "Logesh", "abhi", "Jagu"],
      show: false,
      cardName: "",
      MyNewTask: "",
      MyPart: "",
      editTask: ""
    };
    //Open Modal
    this.showModal = (e) => {
      this.setState({ show: true, cardName: e });
      var newTask = this.state.task[
        Math.floor(Math.random() * this.state.task.length)
      ];
      var newName = this.state.Participent[
        Math.floor(Math.random() * this.state.Participent.length)
      ];
      this.setState({
        MyNewTask: newTask,
        MyPart: newName
      });
    };
    //Clode modal
    this.hideModal = () => {
      this.setState({ show: false });
    };
    //Delete card and Task
    this.handleClick = (e) => {
      console.log(e);
      e.preventDefault();
      for (var i = this.state.cards.length - 1; i >= 0; i--) {
        if (this.state.cards[i] === this.state.cardName) {
          this.state.cards.splice(i, 1);
        }
      }

      var indexDel = this.state.task.indexOf(this.state.MyNewTask);
      this.state.task.splice(indexDel, 1);
      var newTask = this.state.task;

      var indexDel1 = this.state.Participent.indexOf(this.state.MyPart);
      this.state.Participent.splice(indexDel1, 1);
      var MyPart1 = this.state.Participent;
      this.setState({
        show: false,
        task: newTask,
        MyPart: MyPart1
      });
    };
  }

  render() {
    return (
      <>
        <div class="App">
          <h1 id="MyNavBar">GPTW Activity</h1>
          <h2>Pick any card </h2>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>{this.state.cardName}</p>
            <p>
              <b>Activity: </b>
              {this.state.MyNewTask}
            </p>
            <p>
              <b>Participent: </b>
              {this.state.MyPart}
            </p>
            <button id="delete" onClick={this.handleClick}>
              Delete
            </button>
          </Modal>
          <div id="wrapper">
            <div id="Mycards">
              {this.state.cards.map((item) => {
                return (
                  <div
                    id="Cards"
                    onClick={(e) => this.showModal(item, this.state.task)}
                  >
                    <h1>{item}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
