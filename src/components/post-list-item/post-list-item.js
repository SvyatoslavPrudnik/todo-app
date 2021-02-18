import React, {Component} from 'react'
import './post-list-item.css'


export default class PostListItem extends Component {

    render() {
        const{label, important, onRemove, onImportant, completed, onCompleted} = this.props

        return(
            <div className={`app-list-item d-flex justify-content-between ${important ? 'important' : ''}`}>
                <span className={`app-list-item-label ${completed ? 'completed' : ''}`}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-star btn-sm'
                    onClick={onImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button type='button' className='btn-checkmark btn-sm'
                    onClick={onCompleted}>
                        <i className='fa checkmark'></i>
                    </button>
                    <button type='button' className='btn-trash btn-sm'
                    onClick={onRemove}>
                        <i className='fa fa-trash-alt'></i>
                    </button>
                </div>
            </div>
        )
    }
}

