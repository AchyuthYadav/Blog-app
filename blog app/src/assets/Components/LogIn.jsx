import React from "react";

class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            email:"",
            password:"",
        } 
    }

    handleInput=({target}) =>{
       let { name, value } = target;
       this.setState({[name] : value });
    }

    handleSubmit = () => ( this.state.email + this.state.password);
  

    render(){
    return (
        <div>
            <div>
                <h2>Log In</h2>
                <p>Need an account?</p>
            </div>

            <form >
               
                <input 
                    onChange={this.handleInput} 
                    type="text" 
                    id="email"
                    value={this.state.email}
                    name = "email"
                    />
                <label htmlFor="password">Password</label>
                <input 
                    onChange={this.handlePassword} 
                    value={this.state.password}
                    type="text"             
                    id="password"
                    name= "password"
                    />
                <button>Log in</button>
            </form>

        </div>
    )
    }
}

export default LogIn;