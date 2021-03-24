import './App.sass'
import React from 'react'
import Logo from './components/Logo'

export default function App() {
    return (
        <div id="App">
            <div id="content">
                <Logo/>

                <p>
                    This logo should be an animated React component!
                </p>
            </div>
        </div>
    )
}
