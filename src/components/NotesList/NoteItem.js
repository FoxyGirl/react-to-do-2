import React, { Component } from 'react'
import './NoteItem.scss'

class NoteItem extends Component {
  render() {
    const { isDone, id: noteId, text } = this.props.note
    const noteClass = isDone ? 'note note--done' : 'note'

    return (
      <li className={noteClass}>
        <input type="checkbox" id={noteId} checked={isDone} onChange={this.props.onDone} />
        <label className="note__label" htmlFor={noteId}>
          {text}
        </label>
        <input
          className="note__editing"
          ref="editing"
          type="text"
          // value={this.state.editText}
          onChange={this.handleEditNode}
          onBlur={this.handleNoteChanged}
          onKeyDown={this.handleKeyDown}
        />
        <span className="note__del" onClick={this.props.onDelete}>
          ×
        </span>
        {this.props.isDone || (
          <span className="note__edit" ref="edit" onClick={this.handleEdit}>
            edit
          </span>
        )}
      </li>
    )
  }
}

export default NoteItem
