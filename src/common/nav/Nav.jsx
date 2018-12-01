import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.scss'


export default class Nav extends Component{
    render(){
        return (
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

        )



    }
}