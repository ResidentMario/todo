import React from 'react';
import { Component } from 'react';
import Tab from './tab';
import List from './list';
import Adder from './adder';

class App extends Component {
    constructor() {
        super();

        this.state = {
            'todos': [
                {'text': 'Clean the cat', 'doneness': 'done'},
                {'text': 'Wash the car', 'doneness': 'not_done'},
                {'text': 'Eat all the cookies', 'doneness': 'done'}
            ],
            'activation_states': {
                'done': 'inactive', 'not_done': 'active'
            }
        };

    }

    render() {
        const onTabClick = (tab_name) => {
            return () => {
                const new_val = (this.state.activation_states[tab_name] === "active") ? "inactive" : "active";

                if (tab_name === "done") {
                    this.setState({
                        'activation_states': {'done': new_val, 'not_done': this.state.activation_states.not_done}
                    });
                } else {
                    this.setState({
                        'activation_states': {'done': this.state.activation_states.done, 'not_done': new_val}
                    });
                }
            }
        };

        const onItemClick = (task) => {
            return () => {
                let task_index = this.state.todos.indexOf(task);
                let new_state = Object.assign({}, this.state);
                console.log(new_state);
                new_state.todos[task_index].doneness = (this.state.todos[task_index].doneness === 'done') ? 'not_done' : 'done';
                console.log(new_state);
                this.setState({
                    'todos': new_state.todos,
                    'activation_states': this.state.activation_states
                });
            };
        };

        return <div className={"app"}>
            <div className={"tab-container"}>
                <Tab name={"Done"}
                     activation_state={this.state.activation_states.done}
                     onClick={onTabClick("done")}
                />
                <Tab name={"Not Done"}
                     activation_state={this.state.activation_states.not_done}
                     onClick={onTabClick("not_done")}
                />
            </div>
            <div className={"list-container"}>
                <List
                    todos={this.state.todos.filter(v => this.state.activation_states[v.doneness] !== 'inactive')}
                    onItemClick={onItemClick}
                />
            </div>
            <div className={"adder-container"}>
                <Adder/>
            </div>
        </div>;
    }
}


export default App;