import React, {Component} from 'react'
import Header from '../../common/header/Header.jsx'

export default class Discover extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '发现'
        }
    }
    render(){
        return (
            <div className="page" id="discover">
                <Header title={this.state.title} />
            </div>
        )
    }
}