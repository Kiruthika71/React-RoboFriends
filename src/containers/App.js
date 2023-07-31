import React from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component { 
    constructor() {
        super()
            this.state = {
                robots: [],
                searchfield: ''
            }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
    }


    render() {
        const filteredrobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">Robofriends</h1>
                    <SearchBox searchchange = {this.onSearchChange} />
                    <Scroll>
                        <CardList robots = {filteredrobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;