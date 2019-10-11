import React, { Component } from 'react'
import NoteEditor from '../NoteEditor'
import NotesList from '../NotesList'
import FiltersList from '../FiltersList'
import './ToDoApp.scss'

class ToDoApp extends Component {
  state = {
    notes: [],
    displayedNotes: [],
  }

  handleNoteAdd = newNote => {
    const { notes } = this.state
    const newNotes = [newNote, ...notes]
    // const newFilters = this.state.filters.slice();
    // this.setState({ notes: newNotes, displayedNotes: newNotes}, () => {
    //     const curFilter = newFilters.filter(item => item.isActive === true);
    //     if (curFilter[0].name === 'done') {
    //         this.handleNoteFilter('new');
    //     } else {
    //         this.handleNoteFilter(curFilter[0].name);
    //     }
    // });
    this.setState({ notes: newNotes, displayedNotes: newNotes })
  }

  _updateLocalStorage = () => {
    const notes = JSON.stringify(this.state.notes)
    localStorage.setItem('todoNotes', notes)
  }

  componentDidMount() {
    const localNotes = localStorage.getItem('todoNotes')

    if (localNotes) {
      const initNotes = JSON.parse(localNotes)
      this.setState({
        notes: initNotes,
        displayedNotes: initNotes,
      })
    }
  }

  componentDidUpdate() {
    console.log('%c%s', 'color: blue', 'componentDidUpdate!')
    this._updateLocalStorage()
  }

  render() {
    console.log('%c%s', 'color: red', 'render!')

    const { displayedNotes } = this.state

    return (
      <div className="todo-app">
        <header className="todo-app__header">
          <h1 className="todo-app__title">ToDo App</h1>
        </header>
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
        <NotesList notes={displayedNotes} />
        <FiltersList />
      </div>
    )
  }
}

export default ToDoApp
