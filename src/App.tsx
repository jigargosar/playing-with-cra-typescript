// @flow

import * as debug from 'debug'
import * as faker from 'faker'
import * as React from 'react'
import {Fragment} from 'react'
import './App.css'

const log = debug('App')

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

const AllCategories = [
  Category.InBasket,
  Category.NextAction,
  Category.Project,
  Category.SomeDay,
]

export function createRandomTask() {
  const defaults = {
    category: faker.random.arrayElement(AllCategories),
    createdAt: Date.now(),
    done: faker.random.boolean(),
    id: faker.random.alphaNumeric(3),
    title: faker.random.word(),
  }
  return Task(defaults)
}

// const task = {
//   id: faker.random.alphaNumeric(3),
// }

function App() {
  const handleEnter = (event: React.KeyboardEvent) => {
    const target = event.target
    if (!(target instanceof HTMLInputElement)) {
      throw new Error('event.target is not input element')
    }
    log(target.value)
    if (event.key === 'Enter') {
      log(target.value)
    }
  }
  return (
    <Fragment>
      <input type="text" onKeyPress={handleEnter} />
    </Fragment>
  )
}

export default App
