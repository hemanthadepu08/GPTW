import "./styles.css";
import React from "react";
import { Modal } from "./Modal";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: ["card_01", "card_02", "card_03", "card_04"],
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

      for (var i = this.state.cards.length - 1; i >= 0; i--) {
        if (this.state.cards[i] === this.state.cardName) {
          this.state.cards.splice(i, 1);
        }
      }

      var indexDel = this.state.task.indexOf(this.state.MyNewTask);
      this.state.task.splice(indexDel, 1);
      var newTask = this.state.task;
      this.setState({
        show: false,
        task: newTask
      });
    };
    //edit task
    //   editTask=()=>{
    //      var editTask = this.state.task[Math.floor(Math.random()*this.state.task.length)];
    //    this.setState({
    //      MyNewTask:editTask,

    //    })
    //   }
  }
  render() {
    return (
      <>
        <div class="App">
          <h1 id="MyNavBar">GPTW Activity</h1>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>{this.state.cardName}</p>
            <p>{this.state.MyNewTask}</p>
            <p>{this.state.MyPart}</p>
            <button onClick={this.handleClick}>Delete</button>
          </Modal>
          <div id="wrapper">
            <div id="Mycards">
              {this.state.cards.map((item) => {
                return (
                  <div
                    id="Cards"
                    onClick={(e) => this.showModal(item, this.state.task)}
                  >
                    {item}
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
