import React, {Component} from 'react'
import Header from '../../common/header/Header.jsx'


export default class Order extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '订单'
        }
    }
    render(){
        return (
            <div className="page" id="order">
                <Header title={this.state.title}/>
            </div>
        )
    }
}