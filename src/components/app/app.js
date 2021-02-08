import React, {Component} from 'react'
import './app.css'

import AppHeader from '../app-header'
import PostAddForm from '../post-add-form'
import PostList from '../post-list'


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {title: 'Купить молоко', id: 1},
                {title: 'Купить хлеб', id: 2},
                {title: 'Купить воду', id: 3}
            ]
        }
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id)
            const newData = [...data.slice(0, index), ...data.slice(index+1)]
            return{
                data: newData
            }
        })
    }
    render() {
        return(
            <div className='app'>
                <AppHeader/>
                <PostAddForm/>
                <PostList 
                posts={this.state.data}
                onRemove={this.removeItem}/>                
            </div>
        )
    }
}
