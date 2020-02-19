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
        console.log(model);
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