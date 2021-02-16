import React from 'react'
import './app-header.css'

const AppHeader = (({allPosts, importantPosts}) => {
    return(
        <div className='app-header'>
            <h1 className='project-name'>Todo app</h1>
            <h2 className='posts-counter'>{allPosts} записи, из них важных {importantPosts}</h2>
        </div>
    )
})

export default AppHeader