import React from 'react'
import Login from './LoginForm'

function Home() {
    let loggedIn = false;
    return (
        <div>
        {
        (loggedIn)?
        <Login /> : 
        (
            <div>
                <div>
                    <h2>Home</h2>
                </div>
            </div>
        )
        }
        </div>
    )
}
export default Home