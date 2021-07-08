import React, { Component } from 'react';
import './Login.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
class Login extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
 handlechange = (event) =>{
     this.setState({[event.target.name]:event.target.value } )
 }
 handlesubmit = (event) => {
    event.preventDefault();
     alert(` ${this.state.fullname}, your registeration is  succesfull`);
     const registerd = {
         fullname: this.state.fullname,
         email: this.state.email,
         password: this.state.password,
         gender: this.state.gender
     }
      axios.post('http://localhost:4000/app/signup',registerd)
      .then(response => console.log(response.data))
         window.location ='/Question'
     
     
 }

    render(){
        return(
            
            <div className="main">
                <h1>  Registration Page</h1><br/>
             <form onSubmit={this.handlesubmit} className="login">
            
            
            <label> Fullname:</label><br/>
             <input type="text" name="fullname" onChange={this.handlechange}  /> <br/>
            <label> Email:</label><br/>
            <input type="email" name="email"  onChange={this.handlechange}/> <br/>
            <label> Password:</label><br/>
            <input type="password" name="password" onChange={this.handlechange} /> <br/>
            
          
           Gender: <br/> <input type="radio" name="gender" value="male" onChange={this.handlechange} />
          Male <input type="radio" name="gender" value="female" onChange={this.handlechange }/>Female
          <input type="radio" name="gender" value="other"/> Others <br/><br/>
          <div>
            <input type="submit" value="Register"   />
            </div>
            </form>
            
           
        </div>
    );
}

}

export default Login;