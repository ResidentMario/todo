import React from 'react';
import { Component } from 'react';


class Adder extends Component {
    render() {
        return <div className={"adder"}>
            <div className={"adder-plus-button"}>
                +
            </div>
            <textarea className={"adder-textarea"}>
                Foo Bar Baz
            </textarea>
        </div>
    }
}


export default Adder;