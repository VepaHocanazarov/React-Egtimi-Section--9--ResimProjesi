import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";
import axios from "axios"
import ImageList from "./images/ImageList";

class App extends Component {

  state = {
    images: []
  }

  onSearchİmage = async (search) => {
    console.log("App:" + search);
    const result = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: search
      },
      headers: {
        Authorization: "Client-ID -cbyB4TJpc-1_GQIhHCS_fYPxo-lExnYKe7Pj9gtrmM"
      }
    })
    console.log(result.data.results);

    this.setState({
      images: result.data.results
    })
  }

  render() {
    return (
      <div className="app-container" >
        <SearchBar onSearchİmage={this.onSearchİmage} />
        <ImageList images = {this.state.images}  />
      </div>
    )
  }

};



export default App;
