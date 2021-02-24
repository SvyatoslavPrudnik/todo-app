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
                {title: 'Купить молоко', important: false, completed: false, id: 1},
                {title: 'Купить хлеб', important: false, completed: false, id: 2},
                {title: 'Купить воду', important: false, completed: false, id: 3}
            ]
        }
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.onCompleted = this.onCompleted.bind(this);
        
        const {data} = this.state
        this.maxId = data[data.length - 1].id + 1
        
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

    onCompleted(id){
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const oldItem = data[index];
            const newItem = {...oldItem, completed: !oldItem.completed};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return{
                data: newArr
            }
        })
    }

    onImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const oldItem = data[index];
            const newItem = {...oldItem, important: !oldItem.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return{
                data: newArr
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
        const {data} = this.state;
        const allPosts = data.length;
        const importantPosts = data.filter(post => post.important === true).length
        return(
            <div className='app'>
                <AppHeader
                allPosts={allPosts}
                importantPosts={importantPosts}/>
                <PostAddForm
                onAdd={this.addItem}/>
                <PostList 
                posts={this.state.data}
                onRemove={this.removeItem}
                onImportant={this.onImportant}
                onCompleted={this.onCompleted}
                important={this.state.data.important}
                completed={this.state.data.completed}/>                
            </div>
        )
    }
}
