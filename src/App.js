import React, { Component } from "react";
import DynamicForm from "./components/DynamicForm/index";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: '',
          dob: '',
          gender: '',
          contact: {
            home: '',
            mobile: '',
          },
          consent: '',
          guardian: {
            name: '',
            contact: '',
          },
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <DynamicForm
          title="Latitude Dynamic Form" />
        <div id="json"
          style={{ width: "300" }}>
          {JSON.stringify(this.state.data[0])}
        </div>
      </div>
    );
  }
}

export default App;
