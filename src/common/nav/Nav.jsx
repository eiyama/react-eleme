import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.scss'


export default class Nav extends Component{
    render(){
        return (

<<<<<<< HEAD
            <nav className="content-nav">
                <NavLink to="/">首页</NavLink>
                <NavLink to="/discover">发现</NavLink>
                <NavLink to="/order">订单</NavLink>
                <NavLink to="/mine">我的</NavLink>
            </nav>
=======

                    <nav className="content-nav" >
                        <NavLink to="/">
                            <span className="iconfont icon-eliaomo"></span>
                            <span>首页</span>
                        </NavLink>
                        <NavLink to="/discover">
                            <span className="iconfont icon-faxian"></span>
                            <span>发现</span>
                        </NavLink>
                        <NavLink to="/order">
                            <span className="iconfont icon-icon-"></span>
                            <span>订单</span>
                        </NavLink>
                        <NavLink to="/mine">
                            <span className="iconfont icon-wode"></span>
                            <span>我的</span>
                        </NavLink>

                    </nav>
>>>>>>> 9a0213ae9d992147d1563258fb6dc31e180acc45
        )



    }
}