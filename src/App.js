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
          className="form"
          title="Latitude Dynamic Form"
          model={[
            { key: 'name', label: 'Name*', props: { required: true, name: 'name' } },
            { key: 'dob', label: 'DOB (dd/mm/yyyy)', type: 'date', props: { name: 'dob' } },
            { key: 'gender', label: 'Gender', type: 'select' },
            { key: 'mobile', label: 'Mobile' },
            { key: 'home', label: 'Home' },
            { key: 'consent', label: 'Consent Required', type: 'checkbox' },
            { key: 'guardian', label: 'Guardian name' },
            { key: 'gurdiancontact', label: 'Guardian Contact' }
          ]} />
        <div id="json"
          style={{ width: "300" }}>
          {JSON.stringify(this.state.data[0])}
        </div>
      </div>
    );
  }
}

export default App;
