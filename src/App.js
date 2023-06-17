import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Navbar } from './components/static/NavBar'
import LandingPage from './components/static/LandingPage';

function App(props){
    return (
            <>
                <BrowserRouter>
                    <Navbar />    
                    <LandingPage /> 
                </BrowserRouter>
            </>
    )
}

export default App;