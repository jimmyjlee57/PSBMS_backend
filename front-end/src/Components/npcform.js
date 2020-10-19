import React, { useState, Component } from 'react';
import  './../Styles/npc.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
//https://reactjs.org/docs/forms.html
class BasicTextFields extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      amount: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandle = (e) => {
    e.preventDefault()
    console.log(this.state)
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://cse3311.herokuapp.com/api/expenses/'
    axios
    .post((proxyUrl+targetUrl), this.state)
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)})
  }

  
  render(){
    const {title,description,amount} = this.state
    const {visible} = false
    //const showVisible = () => setVisible(!visible);

  return (
    <form className = {!visible ? 'formN' : 'form-nonN'}>
    <TextField id="outlined-search" onChange = {this.changeHandler} name = "title" value ={title} label="title" type="search" variant="outlined" className = "space11"/>
    <TextField id="outlined-search" onChange = {this.changeHandler} name = "description" value ={description} label="description" type="search" variant="outlined" className = "space22"/>
    <TextField id="outlined-search" onChange = {this.changeHandler} name = "amount" value ={amount} label="$ amount Hour" type="search" variant="outlined" className = "space33"/>
      <Button variant="outlined" onChange = {this.changeHandler} color="secondary" className = "space44" onClick={this.submitHandle}>
        Submit
      </Button>
      <h1 className = "title">Next Payment Calculation</h1>
    </form>
  );
}
}

export default BasicTextFields