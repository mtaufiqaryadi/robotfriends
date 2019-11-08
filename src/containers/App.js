import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import Search from '../components/Search';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        // this.setState({ robots: robots });
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filterRobot = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        });

        if (!robots.length) {
            return (<h1 className='tc'>Loading</h1>);
        } else {
            return (
                < div className='tc' >
                    <h1>Robot Friends</h1>
                    <Search searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobot} />
                    </Scroll>
                </div >
            )
        }
    }
}

export default App;