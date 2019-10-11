import React, { Component } from 'react'
import NoteItem from './NoteItem'
import './NotesList.scss'

class NotesList extends Component {
  render() {
    const { notes } = this.props
    console.log('notes', notes)
    return (
      <ul className="notes-list">
        {notes.map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
      </ul>
    )
  }
}

export default NotesList
