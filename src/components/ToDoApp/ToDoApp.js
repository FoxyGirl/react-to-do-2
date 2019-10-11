import React, { Component } from 'react'
import NoteEditor from '../NoteEditor'
import NotesList from '../NotesList'
import FiltersList from '../FiltersList'
import './ToDoApp.scss'

const initNotes = [
  { text: '2233', isDone: false, id: 1570801672949 },
  { text: 'sdsffd', isDone: true, id: 1570801664082 },
]

class ToDoApp extends Component {
  state = {
    notes: [],
    displayedNotes: [],
  }

  componentDidMount() {
    this.setState({
      notes: initNotes,
      displayedNotes: initNotes,
    })
  }

  render() {
    const { displayedNotes } = this.state

    return (
      <div className="todo-app">
        <header className="todo-app__header">
          <h1 className="todo-app__title">ToDo App</h1>
        </header>
        <NoteEditor />
        <NotesList notes={displayedNotes} />
        <FiltersList />
      </div>
    )
  }
}

export default ToDoApp
