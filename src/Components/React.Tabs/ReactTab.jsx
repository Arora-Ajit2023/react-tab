// @ts-nocheck

import React, { useState } from 'react'
// import './ReactTab.css'

const TabData = [
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem"
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering"
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)"
    ], [
        "Vanilla JavaScript requires imperative programming",
        "Imperative Programming: You define all the steps needed to achieve a result",
        "React on the other hand embraces declarative programming",
        "With React, you define the goal and React figures out how to get there"
    ]
]


const ReactTab = () => {
    const [activeContentIndex, setActiveContentIndex] = useState(0)


    return (
        <div>
            <header>
                <img src="https://uc08fv.csb.app/react-logo-xs.png" alt="react-logo" />
                <div>
                    <h1>
                        React.js
                    </h1>
                    <p>i.e., using the React library for rendering the UI</p>
                </div>
            </header>
            <div id='tabs'>
                <div className='btns'>
                    <button className={activeContentIndex === 0 ? 'active' : ''} onClick={() => setActiveContentIndex(0)}>Why React?</button>
                    <button className={activeContentIndex === 1 ? 'active' : ''} onClick={() => setActiveContentIndex(1)}>Core Features</button>
                    <button className={activeContentIndex === 2 ? 'active' : ''} onClick={() => setActiveContentIndex(2)}>Related Resources</button>
                    <button className={activeContentIndex === 3 ? 'active' : ''}
                        onClick={() => setActiveContentIndex(3)}>React vs Js</button>
                </div>
                <div id="content">
                    <ul>
                        {TabData[activeContentIndex].map((data) => {
                            return (
                                <li key={data}>{data}</li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        </div >
    )
}

export default ReactTab
