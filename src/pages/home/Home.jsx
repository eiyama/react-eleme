
import React, {Component} from 'react'

import  Nav from '../../common/nav/Nav.jsx'
import './home.scss'


export default class Home extends Component{
    render(){
        return (
            <div className="page" id="home">
         
                <div className="wrap">
                    <div className="title">
                        深圳
                    </div>
                    <div className="search">
                        <input type="text"/>
                    </div>
                </div>
            </div>
        )
    }
}