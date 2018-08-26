import React from 'react';
import { Component } from 'react';


class Tab extends Component {
    render() {
        return <div className={"tab " + this.props.activation_state}
                    onClick={this.props.onClick}>{this.props.name}</div>;
    }
}


export default Tab;