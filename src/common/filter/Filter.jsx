import React, {Component} from 'react'
import API from '../../api'
import './Filter.scss'


export default class Filter extends Component{
    constructor(){
        super();
        this.state = {
            filterData:[],
            insideSortData:[],
            isShow: false
        }
    }
    render(){
        let {filterData,insideSortData,isShow} = this.state;
        return(
            <div className="filter">
                <div className="filter-title">
                    <li onClick={()=>{
                           this.setState({isShow: !isShow});
                      }}>
                            综合排序
                            <span></span>
                    </li>
                    <li>距离最近</li>
                    <li>品质联盟</li>
                    <li onClick={()=>{
                           this.setState({isShow: !isShow});
                      }}>筛选  </li> 
                </div> 
                <div className="filter-contain">
                     {isShow?<ul className="insideSort">
                         {
                            insideSortData.map(item=>{
                                return (
                                    <li key={item.order_by}>
                                       {item.name}
                                    </li>
                                )
                            }) 
                         }
                     </ul>:null}
                     <ul className="bar">

                     </ul>
                </div> 
                {isShow?<div className="mc">
                </div>:null}            
            </div>
        )
    }
    componentDidMount(){
         //请求的url
         fetch(API.FILTER_API+"?latitude="+22.541847+"&longitude="+114.071311)
         //获得请求的响应对象
         .then((response)=>{
             //以json的形式解析请求得到的json数据
             return response.json();
         })
         //请求得到结果，解析完成
         .then((json)=>{
             this.setState({insideSortData: json.outside.inside_sort_filter,});
             console.log(json)
             console.log(json.outside.inside_sort_filter);
         })
         .catch((ex)=>{
             console.log('parsing failed', ex)
         })
    }
}