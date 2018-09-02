import * as faker from 'faker'
import * as React from 'react'
import {Component} from 'react'
import './App.css'
import logo from './logo.svg'

function Task({
  id,
  title,
  done,
  createdAt,
  category,
}: {
  id: string
  title: string
  done: boolean
  createdAt: number
  category: Category
}) {
  return { id, title, done, createdAt, category }
}

enum Category {
  InBasket,
  NextAction,
  Project,
  SomeDay,
}

export function createRandomTask() {
  const defaults = {
    category: faker.random.arrayElement([
      Category.InBasket,
      Category.NextAction,
      Category.Project,
      Category.SomeDay,
    ]),
    createdAt: Date.now(),
    done: faker.random.boolean(),
    id: faker.random.alphaNumeric(3),
    title: faker.random.word(),
  }
  return Task(defaults)
}

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
        <div>task.id={task.id + 1}</div>
      </div>
    )
  }
}

export default App
