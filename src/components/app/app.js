import React, {Component} from 'react'
import './app.css'

import AppHeader from '../app-header'

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
    }
    render() {
        return(
            <div className='app'>
                <AppHeader/>                
            </div>
        )
    }
    

}
