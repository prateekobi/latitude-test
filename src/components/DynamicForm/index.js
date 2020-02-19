import React, { Component } from "react";
import "./form.css";

class DynamicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // Calculate age by input given yyyy-mm-dd (used for validation)
    getAge = (e) => {
        const dob = e.target.dob.value;
        let birthday = +new Date(dob);

        return ~~((Date.now() - birthday) / (31557600000));
    }

    onChange = (e, key) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(value);

        this.setState({
            [key]: this[key].value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        // Validation for name - must include first and last name seperated by space (checking for space)
        if (name.indexOf(' ') === -1) {
            alert('Name must contain first and last name!');
            return;
        }

        // Validation for age - check whether user > 18
        if (this.getAge(e) < 18) {
            alert('Must be older than 18!');
            return;
        }
        if (this.props.onSubmit) this.props.onSubmit(this.state);
    }

    renderForm = () => {
        // Create model prop - values in App.js
        let model = this.props.model;
        let formUI = model.map((m) => {
            let key = m.key;
            let type = m.type || 'text'; // Default to text type if type is not defined in moodel (App.js)
            let props = m.props || {};  // ex: name attribute - default to empty onj if not defined in App.js

            if (m.type === 'select') {
                return (
                    <div key={key} className="form-group">
                        <label
                            className="form-label"
                            key={"1" + m.key}
                            htmlFor="m.key">
                            {m.label}
                        </label>
                        <select
                            className="form-control"
                            key={"i" + m.key}
                            {...props}
                            ref={(key) => { this[m.key] = key }}
                            onChange={(e) => { this.onChange(e, key) }}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                );
            }

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