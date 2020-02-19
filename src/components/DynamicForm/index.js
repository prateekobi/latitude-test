import React, { Component } from "react";
import "./form.css";

class DynamicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let title = this.props.title || 'Dynamic Form';
        return (
            <div>
                <h3>{title}</h3>
            </div>
        );
    }
}

export default DynamicForm;