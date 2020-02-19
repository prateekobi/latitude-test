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

  onSubmit = (model) => {
    // Set unique model id
    model.id = +new Date();

    // Set data state (store model values in state)
    this.setState({
      data: [model, ...this.state.data]
    })

  }

  render() {
    return (
      <div className="App">
        <DynamicForm
          className="form"
          title="Latitude Dynamic Form"
          model={[
            { key: 'name', label: 'Name*', props: { required: true, name: 'name', placeholder: 'Enter first and last name' } },
            { key: 'dob', label: 'DOB (dd/mm/yyyy)*', type: 'date', props: { name: 'dob' } },
            { key: 'gender', label: 'Gender', type: 'select' },
            { key: 'mobile', label: 'Mobile', props: { placeholder: 'Enter mobile #' } },
            { key: 'home', label: 'Home', props: { placeholder: 'Enter home #' } },
            { key: 'consent', label: 'Consent Required', type: 'checkbox' },
            { key: 'guardian', label: 'Guardian name', props: { placeholder: 'Enter Guardian name' } },
            { key: 'gurdiancontact', label: 'Guardian Contact', props: { placeholder: 'Enter Guardin #' } }
          ]}
          onSubmit={(model) => { this.onSubmit(model) }} />

        <div id="json"
          style={{ width: "300" }}>
          {JSON.stringify(this.state.data[0])}
        </div>
      </div>
    );
  }
}

export default App;
