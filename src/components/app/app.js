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
        this.addItem = this.addItem.bind(this);
        this.maxId = 4;
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

    addItem(text) {
        const newItem = {
            title: text,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newData = [...data, newItem];
            return{
                data: newData
            }
        })
    }
    

    render() {
        return(
            <div className='app'>
                <AppHeader/>
                <PostAddForm
                onAdd={this.addItem}/>
                <PostList 
                posts={this.state.data}
                onRemove={this.removeItem}/>                
            </div>
        )
    }
}
