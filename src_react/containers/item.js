import React from 'react';
import { Component } from 'react';



class Item extends Component {
    render() {
        let item_box_contents = this.props.doneness === 'done' ? "✓" : "";
        let delete_box_contents = this.props.delete_available ? "🗑" : "";

        return <div className={"item-container"}
            onMouseEnter={this.props.onItemMouseEnter}
            onMouseLeave={this.props.onItemMouseLeave}
        >
            <div className={"item-box " + this.props.doneness}
                 onClick={this.props.onItemClick}>
                <div className={"item-box-contents"}>
                    {item_box_contents}
                </div>
            </div>
            <div className={"item " + this.props.doneness}
                 onClick={this.props.onItemClick}
            >
                {this.props.text}
            </div>
            <div className={"delete-container"} onClick={this.props.onItemClickDelete}>
                {delete_box_contents}
            </div>
        </div>;
    }
}


export default Item;