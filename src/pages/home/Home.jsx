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
        let {navList,channelsData} = this.state;
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
                            {
                                
                                (function(){
                                    let lis = [];
                                    for(var i=0;i<navList.length;i++){
                                        if(i<10){
                                            lis.push(<a href="javascript:;" key={navList[i].activity_id}>
                                                        <img src=""/>
                                                        <span className="name" >{navList[i].name}</span>
                                                    </a>);
                                        }
                                    }
                                    return lis;
                                })()
                                
                            }
                                
                            </div>
                        </div>
                    </div>

                    <nav>
                        { 
                            channelsData.map((item)=>{
                                return (
                                    <li key={item.restaurant.id}>
                                    <span>{item.restaurant.name}</span>
                                    </li>
                                )
                            })
                        
                        }
                    </nav>
                
                </div>
            </div>
        )
    }
    componentDidMount(){

        //请求nav轮播图
        fetch(API.NAV_API+"?latitude="+31.230378+"&longitude="+121.473658+
        "&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template")
            .then(response=>{
                return response.json();
            }).then(json=>{
                this.setState({navList:json[0].entries});
                // console.log(json)
            }).catch(ex=>{
                console.log('',ex);
            })

        //请求的url
        fetch(API.GETSHOPLIST_API+"?latitude="+31.230378+"&longitude="+121.473658)
        //获得请求的响应对象
        .then((response)=>{
            //以json的形式解析请求得到的json数据
            return response.json();
        })
        //请求得到结果，解析完成
        .then((json)=>{
            this.setState({channelsData: json.items});
            // console.log(json.items)
        })
        .catch((ex)=>{
            console.log('parsing failed', ex)
        })


    }
}