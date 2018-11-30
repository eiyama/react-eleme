
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
        let {channelsData} =this.state;
        return (
            <div className="page" id="home">
             
                    {/* 头部 */}
                    <div className="title">
                        深圳
                    </div>
                    {/* 搜索栏 */}
                    <div className="search">
                        <div className="content">
                        <i className="iconfont icon-search"></i>
                            <span>搜索饿了么商家、商品名称</span>
                        </div>
                    </div>
                    <div className="wrap">
                    {/* 轮播图nav */}
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
        fetch(API.GETSHOPLIST_API+"?latitude="+31.230378+"&longitude="+121.473658)
        //获得请求的响应对象
        .then((response)=>{
            //以json的形式解析请求得到的json数据
            return response.json();
        })
        //请求得到结果，解析完成
        .then((json)=>{
            this.setState({channelsData: json.items});
            console.log(json.items)
        })
        .catch((ex)=>{
           
        })

        //轮播图请求
        fetch(API.NAV_API+"?latitude="+31.230378+"&longitude="+121.473658+"&templates[]=main_template")
        //获得请求的响应对象
        .then((response)=>{
            //以json的形式解析请求得到的json数据
            return response.json();
        })
        //请求得到结果，解析完成
        .then((json)=>{
            this.setState({navList: json.items});
            console.log(json)
        })
        .catch((ex)=>{
           
        })



    

    }


}