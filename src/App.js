import React, { Component } from "react";
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
    return (  );
  }
}

export default App;
