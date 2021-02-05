import React, {Component} from 'react'
import './post-list-item.css'


export default class PostListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            important: false
        }
        this.onImportant = this.onImportant.bind(this);   
    }

    onImportant(){
        this.setState(({important}) => ({
            important: !important
        }))
    }

    render() {
        const {label} = this.props;
        const {important} = this.state;
        let importantClass = 'app-list-item d-flex justify-content-between';

        if (important){
            importantClass += ' important'
        }

        return(
            <div className={importantClass}>
                <span className='app-list-item-label'>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-star btn-sm'
                    onClick={this.onImportant}>
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

