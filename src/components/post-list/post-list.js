import React from 'react'
import './post-list.css'

import PostListItem from '../post-list-item'


const PostList = (({posts, onRemove, onImportant, important}) => {
    const elements = posts.map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <PostListItem 
                label={item.title}
                id={item.id}
                onRemove={() => onRemove(item.id)}
                onImportant={() => onImportant(item.id)}
                important={important}/>
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