import React, {Component} from 'react'
import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
       this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e){
        console.log(e.target.value)
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text)
        console.log(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return(
            <form className='post-add-form'
            onSubmit={this.onSubmit}>
                <div className='input-wrapper'>
                    <input
                        placeholder='Добавить заметку'
                        className='form-input'
                        onChange={this.onValueChange}
                        value={this.state.text}>
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
}


