import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

// 头部，底部

// 页面
import Home from './pages/home/Home.jsx'
import Discover from './pages/discover/Discover.jsx'
import Order from './pages/order/Order.jsx'
import Mine from './pages/mine/Mine.jsx'

export default class App extends Component{
    render(){
        return (
            <Router>
                <div className="app">
                
                    
                    <Route exact path="/" component={Home}/>
                    <Route path="/discover" component={Discover}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/mine" component={Mine}/>

                  
                </div>
            </Router>
        )
    }
}