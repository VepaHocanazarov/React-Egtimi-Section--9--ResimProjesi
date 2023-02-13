import React, { Component } from 'react'
import "./searchbar.css"

class SearchBar extends Component {

    state ={
        search:""
    }

    inputChange = (event) =>
    {

        console.log(event.target.value)

      this.setState({
        search:event.target.value
      })
    }

    render() {
        return (
            <div className=" serach-bar-container ui input">
                <input type="text" onChange={this.inputChange} placeholder="Search..."  />
            </div>
        )
    }
}



export default SearchBar
