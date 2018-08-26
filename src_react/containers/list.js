import React from 'react';
import { Component } from 'react';
import Item from './item';


class List extends Component {
    render() {
        let tasks = [];
        let i = 0;
        for (let task of this.props.todos) {
            tasks.push(
                <Item
                    doneness={task.doneness}
                    text={task.text}
                    key={task.text}
                    onItemClick={this.props.onItemClick(i)}
                />
            );
        }

        return <div className={"list-container"}>
            <ul className={"list"}>
                { tasks }
            </ul>
        </div>;
    }
}


export default List;