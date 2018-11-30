
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
        return (
            <div className="page" id="home">
         
                <div className="wrap">
                    <h1>首页</h1>

                </div>
            </div>
        )
    }
    
    componentDidMount(){
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