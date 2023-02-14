import React, { Component } from 'react';
import "./searchbar.css";


class SearchBar extends Component {

    state = {
        search: ""
    }

    inputChange = (event) => {

        console.log(event.target.value)

        this.setState({
            search: event.target.value
        })
    };

    serachinput = ()=>{
        console.log("başarili"),
        this.props.onSearchİmage(this.state.search);
    }

    render() {
        return (
            <div className=" serach-bar-container ui input">
                <input type="text" onKeyPress={(e) =>{
              if(e.key === "Enter" && "Tap"){
                this.serachinput();
              };
                } } 
                onChange={this.inputChange} placeholder="Search..." />
                <button className="ui icon button" onClick={this.serachinput}>
                    <i className="search icon"></i>
                </button>
            </div>
        )
    }
}



export default SearchBar
