import React, { Component,Fragment } from 'react';
import LiItem from './LiItem'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
      inputValue:''
    }

    this.inputChange = this.inputChange.bind(this);
    this.addClick = this.addClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  inputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  deleteItem(index){
    let list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }
  getLiItem(){
    return(
      this.state.list.map((item,index)=>{
        return (
          <LiItem content={item} key={index} delete={this.deleteItem} index={index}></LiItem>
        )
      })
    )
  }
  render(){
    return(
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange}></input>
          <button className='btn-red' onClick={this.addClick}>add</button>
        </div>
        <ul>
          {
            this.getLiItem()
          }
        </ul>
      </Fragment>
    )
  }
}

export default App;
