import React from 'react'
import './app-header.css'

const AppHeader = (() => {
    return(
        <div className='app-header'>
            <h1 className='project-name'>Todo app</h1>
            <h2 className='posts-counter'>3 записи, из них важных 0</h2>
        </div>
    )
})

export default AppHeader