import React, {Component} from 'react'
import API from '../../api'
import 'whatwg-fetch'
import './home.scss'
import Filter from '../../common/filter/Filter.jsx'
import nav_img from '../../assets/nav.jpg'
import yh_img from '../../assets/yh.jpg'
import banner_img from '../../assets/banner.jpg'


import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

export default class Home extends Component{
    constructor(){
        super();
        this.state={
            navList:[],
            yhList:[],
            bannerList:[],
            channelsData:[]
        }
    }

    render(){
        let {navList,yhList,bannerList,channelsData} = this.state;
        return (
            <div className="page" id="home">
                <div className="wrap">

                    {/* 头部 */}
                    <div className="title">
                        深圳
                    </div>

                    {/* 搜索栏 */}
                    <div className="search" >
                        <div className="content">
                        <i className="iconfont icon-search"></i>
                            <span>搜索饿了么商家、商品名称</span>
                        </div>
                    </div>
                    {/* 轮播图nav */}
                    <div className="nav-container swiper-container">
                        <div className="nav-wrap swiper-wrapper" >
                            <div className="nav-wrap-item swiper-slide active" >
                            {                          
                                (function(){
                                    let lis = [];
                                    for(var i=0;i<navList.length;i++){
                                        if(i<10){
                                            lis.push(<li  key={navList[i].activity_id}>
                                                        <img className="nav-img" src={nav_img}/>
                                                        <p className="name" >{navList[i].name}</p>
                                                    </li>);
                                        }
                                    }
                                    return lis;
                                })()
                                
                            }       
                            </div>
                            <div className="nav-wrap-item swiper-slide hidden" >
                            {
                                
                                (function(){
                                    let lis = [];
                                    for(var i=0;i<navList.length;i++){
                                        if(i>10){
                                            lis.push(<li  key={navList[i].activity_id}>
                                                        <img className="nav-img" src={nav_img}/>
                                                        <p className="name" >{navList[i].name}</p>
                                                    </li>);
                                        }
                                    }
                                    return lis;
                                })()
                                
                            } 
                            </div>  
                        </div>
                    </div>

                    {/* 优惠+banner轮播图 */}
                    <div className="yh-banner" >
                        
                        {/* 优惠 */}
                        <section>
                            <div className="youhui" >
                            {
                                (function(){
                                    let lis = [];
                                    for(var i=0;i<yhList.length;i++){
                                        if(i<2){
                                           lis.push(
                                            <div className="youhui-item" >
                                                <h3 className="name" >{yhList[i].name}</h3>
                                                <h3 className="description" >{yhList[i].description}</h3>
                                                <h3 className="qiang" >立即抢购 ></h3>
                                                <img src={yh_img}/>
                                            </div> 
                                           );
                                        }
                                    }
                                    return lis;
                                }())
                            }
                                
                            </div>
                        </section>
                        {/* banner轮播图 */}
                        <div className="banner swiper-container" >
                            <div className="banner-wrap swiper-wrapper" >
                                {
                                    bannerList.map(item=>{
                                        return (
                                            <div className="banner-item swiper-slide" >
                                                <img src={banner_img}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                     
                     {/* 筛选 */}
                    <Filter/>                    

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

        //请求nav轮播图  //请求优惠数据
        fetch(API.NAV_API+"?latitude="+31.230378+"&longitude="+121.473658+
        "&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template")
            .then(response=>{
                return response.json();
            }).then(json=>{
                this.setState({navList:json[0].entries});
                this.setState({yhList:json[1].entries})
                // console.log(json)
            }).catch(ex=>{
                console.log('',ex);
            })

        //请求banner轮播图
        fetch(API.BANNER_API+"?consumer="+1+"&type="+1+"&latitude="+31.230378+"&longitude="+121.473658)
            .then(response=>{
                return response.json();
            }).then(json=>{
                this.setState({bannerList:json});
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

<<<<<<< HEAD
        
=======

        
        
        
        
        // 导航栏nav轮播图
        var navSwiper = new Swiper ('.nav-container', {
            // loop:true
        })
>>>>>>> 89129e679176cac864831c6a3c0f5b3c0b297284

        // banner轮播图
        var bannerSwiper = new Swiper ('.banner', {
            // loop:true
        })

    }
}