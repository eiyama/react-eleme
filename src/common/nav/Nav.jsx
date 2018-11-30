import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'
import './Nav.scss'


export default class Nav extends Component{
    render(){
        return (

            <nav className="content-nav">
                <NavLink to="/">首页</NavLink>
                <NavLink to="/discover">发现</NavLink>
                <NavLink to="/order">订单</NavLink>
                <NavLink to="/mine">我的</NavLink>
            </nav>
        )
    }
}