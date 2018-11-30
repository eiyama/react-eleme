
import React, {Component} from 'react'

import  Nav from '../../common/nav/Nav.jsx'
import './home.scss'
import API from '../../api'
import 'whatwg-fetch'


export default class Home extends Component{
    constructor(){
        super();
        this.state={
            navList:[]
        }
    }
    render(){
        return (
            <div className="page" id="home">
         
                <div className="wrap">
                    <div className="title">
                        深圳
                    </div>
                    <div className="search">
                        <a className="content">
                        <i className="iconfont icon-search"></i>
                            <span>搜索饿了么商家、商品名称</span>
                        </a>
                    </div>

                    {/* 轮播图nav */}
                    <div className="nav-container">
                        <div className="nav-wrap" >
                            <div className="nav-wrap-item active" >
                                <a href="">
                                    <div className="banner" >
                                        <img src=""/>
                                    </div>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        // fetch(API.NAV_API+"?latitude="+31.230378+"&longitude="+121.473658+
        // "&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template")
       
        fetch(API.NAV_API,{
            latitude:"31.230378",
            longitude:"121.473658",
            "templates[]":"main_template"
        })
        .then(response=>{
            return response.json();
        }).then(json=>{
            this.setState({navList:json.data});
            console.log(json.data)
        }).catch(ex=>{
            console.log('',ex);
        })
    }
}