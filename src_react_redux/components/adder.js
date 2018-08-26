import React from 'react';
import { Component } from 'react';


class Adder extends Component {
    render() {
        return <div className={"adder-container"}>
            <div className={"adder"}>
                <div className={"adder-plus-button"} onClick={this.props.onButtonClick}>
                    +
                </div>
                <textarea
                    className={"adder-textarea"}
                    // onChange={this.props.onChange}
                    // onKeyPress={this.props.onKeyPress}
                    rows={1}
                    value={this.props.value}
                >
                </textarea>
            </div>
        </div>
    }
}


export default Adder;