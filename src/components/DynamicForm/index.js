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
                <div className="dynamic-form">
                    <form onSubmit={(e) => { this.onSubmit(e) }}>
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