import React from 'react';
import { Component } from 'react';



class Item extends Component {
    render() {
        let item_box_contents = this.props.doneness === 'done' ? "✓" : "";

        return <div className={"item-container"}>
            <div className={"item-box " + this.props.doneness}>
                <div className={"item-box-contents"}>
                    { item_box_contents }
                </div>
            </div>
            <div className={"item " + this.props.doneness} onClick={this.props.onItemClick}>
                {this.props.text}
            </div>
        </div>;
    }
}


export default Item;