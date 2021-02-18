import React from 'react'
import './post-list.css'

import PostListItem from '../post-list-item'


const PostList = (({posts, onRemove, onImportant, important, onCompleted, completed}) => {
    const elements = posts.map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <PostListItem 
                label={item.title}
                important={item.important}
                onRemove={() => onRemove(item.id)}
                onImportant={() => onImportant(item.id)}
                completed={item.completed}
                onCompleted={() => onCompleted(item.id)}/>
            </li>
        )
    })
    return(
        <ul className='post-list list-group'>
            {elements}
        </ul>
    )
})

export default PostList