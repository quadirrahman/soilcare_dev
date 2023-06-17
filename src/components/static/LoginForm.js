import axios from "axios"
import React from "react"
import { redirect } from "react-router-dom"


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password:  '',
            isLoggedIn: false,
            user: {}

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userCredentials = {
            username: this.state.username,
            password: this.state.password
        }
        // I have the credentials, I have to send this to server, get back a token/or display appropriate error message
        axios.post('http://localhost:3050/login', userCredentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('axios then', response.data.token)
            const token = response.data.token
            axios.post('http://localhost:3050/dashboard', {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token
                }
            })
            .then(response => {
                console.log('Response from dashboard API', response.data.user)
                this.setState({user: response.data.user})
               
                
            })
            .catch(err => {
                console.log('Error from dashboard API', err)
            })
        })
        .catch(err => {
            console.log('axios catch')
            console.log(err)
        })
        
        
        console.log('in handle submit', userCredentials)
        
    }

    render() {
        return (
            <div>
            {
                
                (this.state.isLoggedIn)? 
                (<h2>Welcome Abdul</h2>) : (
                    <div>
                        <h1>Sign In</h1> 
                        <form onSubmit={this.handleSubmit}>

                            <label>Username</label>
                            <input type="text" name='username' value={this.state.username} onChange={this.handleChange}/> <br />
                            <label>Password</label>
                            <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/> <br />
                            <input type = "submit" value="login"></input>
                        </form>
                    </div>
                )
            }
            
        </div>
        )
    }
}






export default LoginForm
