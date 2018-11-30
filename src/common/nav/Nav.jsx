import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.scss'


export default class Nav extends Component{
    render(){
        return (
<<<<<<< HEAD
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
=======
                    <nav className="content-nav" >
                        <NavLink to="/"  exact>
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
>>>>>>> 00c9b92979d0e882049f3ca8aef3378e67731fa1

        )



    }
}