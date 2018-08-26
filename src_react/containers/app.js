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
                {'text': 'Clean the cat', 'doneness': 'done', 'delete_available': false},
                {'text': 'Wash the car', 'doneness': 'not_done', 'delete_available': false},
                {'text': 'Eat all the cookies', 'doneness': 'done', 'delete_available': false}
            ],
            'activation_states': {
                'done': 'inactive', 'not_done': 'active'
            },
            'adder_value': 'Add new to-dos here!'
        };

    }

    render() {
        const onTabClick = (tab_name) => {
            return () => {
                const new_val = (this.state.activation_states[tab_name] === "active") ? "inactive" : "active";

                if (tab_name === "done") {
                    this.setState(
                        Object.assign({},
                            this.state,
                            {'activation_states': {'done': new_val, 'not_done': this.state.activation_states.not_done}}
                        )
                    );
                } else {
                    this.setState(
                        Object.assign({},
                            this.state,
                            {'activation_states': {'done': this.state.activation_states.done, 'not_done': new_val}}
                        )
                    );
                }
            }
        };

        const onItemClick = (task) => {
            return () => {
                let task_index = this.state.todos.indexOf(task);
                let new_state = Object.assign({}, this.state);
                new_state.todos[task_index].doneness = (this.state.todos[task_index].doneness === 'done') ? 'not_done' : 'done';
                this.setState(new_state);
            };
        };

        const onItemMouseEnter = (task) => {
            return () => {
                let task_index = this.state.todos.indexOf(task);
                let new_state = Object.assign({}, this.state);
                new_state.todos[task_index].delete_available = true;
                this.setState(new_state);
            };
        };

        const onItemMouseLeave = (task) => {
            return () => {
                let task_index = this.state.todos.indexOf(task);
                let new_state = Object.assign({}, this.state);
                new_state.todos[task_index].delete_available = false;
                this.setState(new_state);
            };
        };

        const onItemClickDelete = (task) => {
            return () => {
                let task_index = this.state.todos.indexOf(task);
                let new_state = Object.assign({}, this.state);
                new_state.todos = [...new_state.todos.slice(0, task_index), ...new_state.todos.slice(task_index + 1)];
                this.setState(new_state);
            }
        };

        const adder_onChange = (event) => {
            let new_state = Object.assign({}, this.state);
            new_state['adder_value'] = event.target.value;
            this.setState(new_state);
        };

        const adder_button_onClick = () => {
            if (this.state.adder_value !== "") {
                let new_state = Object.assign({}, this.state);
                let new_todo = new_state['adder_value'];
                new_state['adder_value'] = "";
                new_state.todos.push({'text': new_todo, 'doneness': 'not_done', 'delete_available': false});
                this.setState(new_state);
            }
        };

        const adder_onKeyPress = (event) => {
            if (event.key === "Enter") {
                adder_button_onClick();
            }
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
                    onItemMouseEnter={onItemMouseEnter}
                    onItemMouseLeave={onItemMouseLeave}
                    onItemClickDelete={onItemClickDelete}
                />
            </div>
            <div className={"adder-container"}>
                <Adder
                    onChange={adder_onChange}
                    onButtonClick={adder_button_onClick}
                    onKeyPress={adder_onKeyPress}
                    value={this.state.adder_value}/>
            </div>
        </div>;
    }
}


export default App;