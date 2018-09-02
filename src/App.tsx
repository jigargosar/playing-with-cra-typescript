import * as faker from 'faker'
import * as React from 'react'
import {Component} from 'react'
import './App.css'
import logo from './logo.svg'

const task = {
  id: faker.random.alphaNumeric(3),

}

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>task.id={task.id}</div>
      </div>
    )
  }
}

export default App
