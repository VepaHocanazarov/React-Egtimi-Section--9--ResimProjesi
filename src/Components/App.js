import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css"

class App extends Component {

  onSearchİmage = (search)=>
  {

    console.log("App" + search)
  }

  render() {
    return (
      <div className="app-container" >
        <SearchBar onSearchİmage={this.onSearchİmage} />
      </div>
    )
  }

}



export default App;
