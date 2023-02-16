import React, { Component } from 'react';

class Images extends Component {

    constructor (props){
        super(props);
        this.myRef = React.createRef();
    };

    componentDidMount ()  {
      //console.log(this.myRef);

      this.myRef.current.addEventListener("load",()=>{
        console.log(this.myRef.current.clientHeight);
      })
    }
    

    render() {

        const {image} = this.props;
        return (
            <img ref = {this.myRef} key={image.id} src={image.urls.small} alt="" />

        );
    }
}

export default Images;