import React, { Component } from 'react'

class LiItem extends Component{
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(){
        this.props.delete(this.props.index)
    }
    render(){
        const { content } = this.props; 
        return(
        <div onClick={this.deleteItem}>{content}</div>
        )
    }
}
export default LiItem;