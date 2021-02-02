import React, {Component} from 'react'
import './post-list-item.css'


export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}   
    }

    render() {
        const {label} = this.props;
        return(
            <div className='app-list-item d-flex justify-content-between'>
                <span className='app-list-item-label'>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-star btn-sm'>
                        <i className='fa fa-star'></i>
                    </button>
                    <button type='button' className='btn-checkmark btn-sm'>
                        <i className='fa checkmark'></i>
                    </button>
                    <button type='button' className='btn-trash btn-sm'>
                        <i className='fa fa-trash-alt'></i>
                    </button>
                </div>
            </div>
        )
    }
}

