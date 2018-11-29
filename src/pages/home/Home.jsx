
import React, {Component} from 'react'

import  Nav from '../../common/nav/Nav.jsx'
import './home.scss'


export default class Home extends Component{
    render(){
        return (
            <div className="page" id="home">
         
                <div className="wrap">
                    <h1>首页</h1>
                    <h2>美食</h2>
                </div>
            </div>
        )
    }
}