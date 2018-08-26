import React from 'react';
import { Component } from 'react';
import TabContainer from '../containers/tab_container';
import ListContainer from '../containers/list_container';
import AdderContainer from "../containers/adder_container";

class App extends Component {
    render() {
        return <div className={"app"}>
            <div className={"tab-container"}>
                <TabContainer name={"Done"}/>
                <TabContainer name={"Not Done"}/>
            </div>
            <div className={"list-container"}>
                <ListContainer/>
            </div>
            <div className={"adder-container"}>
                <AdderContainer/></div>
        </div>;
    }
}


export default App;