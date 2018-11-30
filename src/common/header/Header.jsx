import React, {Component} from 'react'

import './Header.scss'


export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
           btn: '<',
           title: ''
        }
    }
    render(){
        let {btn,title} = this.state;
        return (
            <div className="header">
                  <span className="btn">{btn}</span>
                  <span className="title">{this.props.title}</span>                  
            </div>
        )
    }
}