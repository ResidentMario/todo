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
                    delete_available={task.delete_available}
                    onItemClick={this.props.onItemClick(task)}
                    onItemMouseEnter={this.props.onItemMouseEnter(task)}
                    onItemMouseLeave={this.props.onItemMouseLeave(task)}
                    onItemClickDelete={this.props.onItemClickDelete(task)}
                />
            );
            i += 1;
        }

        return <div className={"list-container"}>
            <ul className={"list"}>
                { tasks }
            </ul>
        </div>;
    }
}


export default List;