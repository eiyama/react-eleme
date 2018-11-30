
import React, {Component} from 'react'
import API from '../../api'
import 'whatwg-fetch'
import './home.scss'
import Filter from '../../common/filter/Filter.jsx'


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
                    <Filter/>
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

        //轮播图请求
        fetch(API.NAV_API+"?latitude="+31.230378+"&longitude="+121.473658+"&"+"templates[]=main_template")
        //获得请求的响应对象
        .then((response)=>{
            //以json的形式解析请求得到的json数据
            return response.json();
        })
        //请求得到结果，解析完成
        .then((json)=>{
            this.setState({navList: json.items});
            // console.log(json)
        })
        .catch((ex)=>{
            console.log('parsing failed', ex)
        })



    

    }


}