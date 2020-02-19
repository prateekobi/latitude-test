import React, { Component } from "react";
import "./form.css";

class DynamicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderForm = () => {
        // Create model prop - values in App.js
        let model = this.props.model;
        let formUI = model.map((m) => {
            let key = m.key;
            let type = m.type || 'text'; // Default to text type if type is not defined in moodel (App.js)
            let props = m.props || {};  // ex: name attribute - default to empty onj if not defined in App.js

            return (
                <div key={key} className="form-group">
                    <label
                        className="form-label"
                        key={"1" + m.key}
                        htmlFor="m.key">
                        {m.label}
                    </label>
                    <input
                        ref={(key) => { this[m.key] = key }}
                        {...props}
                        className="form-control"
                        type={type}
                        key={"i" + m.key}
                        onChange={(e) => { this.onChange(e, key) }}>
                    </input>
                </div>
            );
        });
        return formUI;
    }

    render() {
        // Create title prop - value passed in App.js else default to 'Dynamic Form'
        let title = this.props.title || 'Dynamic Form';
        return (
            <div>
                <h3>{title}</h3>
                <div className="dynamic-form">
                    <form onSubmit={(e) => { this.onSubmit(e) }}>
                        {this.renderForm()}
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default DynamicForm;