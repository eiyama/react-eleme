
import React, {Component} from 'react'
import API from '../../api'
import 'whatwg-fetch'
import './home.scss'


export default class Home extends Component{
    constructor(){
        super();
        this.state={
            navList:[],
            channelsData:[]
        }
    }

    render(){
        return (
            <div className="page" id="home">
                <div className="wrap">

                    {/* 头部 */}
                    <div className="title">
                        深圳
                    </div>

                    {/* 搜索栏 */}
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

        //请求nav轮播图
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


        //请求的url
        fetch(API.GETSHOPLIST_API,{
            latitude:"22.54286",
            longitude:"114.059563",
            offset:0,
            limit:8,
            extra_filters:"home",
            rank_id:'',
            terminal:"h5"
            })
            //获得请求的响应对象
            .then((response)=>{
                //以json的形式解析请求得到的json数据
                return response.json();
            })
            //请求得到结果，解析完成
            .then((json)=>{
                this.setState({channelsData: json.data});
                console.log(this.channelsData)
            })
            .catch((ex)=>{
                console.log('parsing failed', ex)
            })


    
    }


}