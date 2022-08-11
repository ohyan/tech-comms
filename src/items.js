import React, { Component } from 'react';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    render(){
        return (
            <div className="card-content">
                <h1>11</h1>
            </div>
        )
    }
}

