// @flow

import {Container} from 'constate'
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
    const target = event.target as HTMLInputElement
    if (target instanceof HTMLInputElement && event.key === 'Enter') {
      log(target.value)
    }
  }
  return (
    <Fragment>
      <Container>
        {() => <input type="text" autoFocus={true} onKeyDown={handleEnter} />}
      </Container>
    </Fragment>
  )
}

export default App
