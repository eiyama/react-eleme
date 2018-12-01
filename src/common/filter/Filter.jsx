import React, {Component} from 'react'
import API from '../../api'
import './Filter.scss'


export default class Filter extends Component{
    constructor(){
        super();
        this.state = {
            sortTitle:'综合排序',
            insideSortData:[],
            isShow: false,
            selectTitle: '',
            storeServerData: [],
            activeTypeData: [],
            averageCostData: []
        }
    }
    render(){
        let {insideSortData,isShow,selectTitle,sortTitle,storeServerData,
            activeTypeData,averageCostData} = this.state;
        return(
            <div className="filter" ref="filters">
                <div className="filter-title">
                    <li onClick={this.selectSortAction.bind(this)}>
                            {sortTitle}
                            <span></span>
                    </li>
                    <li>距离最近</li>
                    <li>品质联盟</li>
                    <li onClick={this.selectFilterAction.bind(this)}>筛选</li> 
                </div> 
                <div className="filter-contain">
                     {/* 综合排序 */}
                     {selectTitle===1&isShow?<ul className="insideSort">
                         {
                            insideSortData.map(item=>{
                                return (
                                    <li key={item.value} onClick={this.selectListAction.bind(this,item.name)}>
                                       {item.name}
                                    </li>
                                )
                            }) 
                         }
                     </ul>:null}
                     {/* 筛选 */}
                     {selectTitle===2&isShow?<div className="bar">
                           <dl className="storeServer">
                              <dt>商家服务(可多选)</dt>
                              <dd>
                                {
                                    storeServerData.map(item=>{
                                        return (
                                            <li key={item.id} >
                                            <img src="item.icon_hash" alt=""/>
                                            <span>{item.name}</span>
                                            </li>
                                        )
                                    }) 
                                }
                              </dd>
                           </dl>
                           <dl className="active-type">
                              <dt>优惠活动(单选)</dt>
                              <dd>
                                {
                                    activeTypeData.map(item=>{
                                        return (
                                            <li key={item.id}>
                                                {item.name}
                                            </li>
                                        )
                                    })
                                }
                              </dd>
                           </dl>
                           <dl className="average-cost">
                               <dt>人均消费</dt> 
                               <dd>
                                {
                                    averageCostData.map(item=>{
                                        return (
                                            <li key={item.id}> 
                                                {item.description}
                                            </li>
                                        )
                                    })
                                }
                               </dd>                          
                           </dl>
                           <ul className="mc">
                               <li className="clean">清空</li>
                               <li className="ok">确定</li>                               
                           </ul>
                     </div>:null
                    }
                </div> 
                {/* 遮罩层 */}
                {isShow?<div className="mc"  onClick={()=>{
                           this.setState({isShow: !isShow});
                      }}>
                </div>:null}            
            </div>
        )
    }
    // 综合排序
    selectSortAction(){
        this.setState({isShow: !this.state.isShow});
        console.log(this.refs.filters);
        if(this.state.isShow === false){
            this.refs.filters.style = 'position:absolute;left:0px;top:46px'
        }
        else{
            this.refs.filters.style = 'position:relative;top:0px';                    
        }
        this.setState({selectTitle: 1}); 
    }
    selectListAction(name){
        this.setState({sortTitle: name});
        this.setState({isShow: !this.state.isShow});   
        this.refs.filters.style = 'position:relative;top:0px';                                 
    }
    // 筛选
    selectFilterAction(){
        this.setState({isShow: !this.state.isShow});
        if(this.state.isShow === false){
            this.refs.filters.style = 'position:absolute;left:0px;top:46px'
        }
        else{
            this.refs.filters.style = 'position:relative;top:0px';                    
        }
        this.setState({selectTitle: 2}); 
    }
    // 数据请求
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
             this.setState({insideSortData: json.outside.inside_sort_filter,
                            storeServerData: json.bar.supports,
                            activeTypeData: json.bar.activity_types,
                            averageCostData: json.bar.average_costs});
         })
         .catch((ex)=>{
             console.log('parsing failed', ex)
         })
    }
}