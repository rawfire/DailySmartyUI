import React, { Component } from "react";
import Logo from './logo';
import SearchBar from "./search-bar";

class Results extends Component {
    render() {
        return (
            <div className="">
                <Logo size={50}/>
                <SearchBar/>
            </div>
        )
    }
}
export default Results