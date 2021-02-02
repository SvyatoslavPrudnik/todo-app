import React from 'react'
import './post-add-form.css'

const PostAddForm = () => {
    return(
        <form className='post-add-form'>
            <div className='input-wrapper'>
                <input
                    placeholder='Добавить заметку'
                    className='form-input'
                    >
                </input>
                <button 
                className='todo-button' 
                type='submit'
                >
                    <i className='fas fa-plus-square'></i>
                </button>
            </div>
        </form>
    )
}


export default PostAddForm