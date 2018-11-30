import React, {Component} from 'react'

import './Header.scss'


export default class Header extends Component{
    constructor(){
        super();
        this.state = {
           btn: '<',
        }
    }
    render(){
        console.log(this.props);
        let {btn} = this.state;
        return (
            <div className="header">
            {/* onClick={()=>{
                      console.log(1)
                      this.props.history.goBack();
                }} */}
                  <span className="btn" >{btn}</span>
                  <span className="title">头部</span>                  
            </div>
        )
    }
}