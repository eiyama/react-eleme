
import React, {Component} from 'react'
import API from '../../api'
import 'whatwg-fetch'

import './home.scss'


export default class Home extends Component{
    constructor(){
        super();
        this.state={
            channelsData:[]
        }
    }


    render(){
        let {channelsData} =this.state;
        return (
            <div className="page" id="home">
         
                <div className="wrap">
                    <h1>首页</h1>
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
    // fetch(API.NAV_API+"?latitude="+31.230378+"&longitude="+121.473658+
        // "&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template")
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
            console.log(json.items)
        })
        .catch((ex)=>{
            console.log('parsing failed', ex)
        })
    }


}