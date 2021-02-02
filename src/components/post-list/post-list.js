import React from 'react'
import './post-list.css'

import PostListItem from '../post-list-item'


const PostList = (({posts}) => {
    const elements = posts.map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <PostListItem 
                label={item.title}
                id={item.id} />
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