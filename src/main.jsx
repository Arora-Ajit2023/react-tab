// @ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactTab from './Components/ReactTab/ReactTab.jsx'
import ParentToChildProp from './Components/ParentToChildProp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParentToChildProp />
  </React.StrictMode>,
)
