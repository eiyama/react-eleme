import React, {Component} from 'react'
import Header from '../../common/header/Header.jsx'


export default class Mine extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '我的'
        }
    }
    render(){
        return (
            <div className="page" id="mine">
                <Header title={this.state.title} />
            </div>
        )
    }
}