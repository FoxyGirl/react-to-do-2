import React, { Component } from 'react'
import './NoteEditor.scss'

class NoteEditor extends Component {
  state = {
    text: '',
  }

  editInput = React.createRef()

  handleTextChange = e => {
    this.setState({ text: e.target.value })
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({ text: '' })
      return
    }

    if (e.keyCode === 13) {
      this.handleNoteAdd()
    }
  }

  handleNoteAdd = () => {
    if (this.state.text.trim() === '') {
      this.setState({ text: '' })
      return
    }

    const newNote = {
      text: this.state.text,
      isDone: false,
      id: Date.now(),
    }

    this.props.onNoteAdd(newNote)
    this.setState({ text: '' })
    this.editInput.current.focus()
  }

  componentDidMount() {
    this.editInput.current.focus()
  }

  render() {
    const { text } = this.state

    return (
      <div className="note-editor">
        <input
          type="text"
          placeholder="Enter your new task here..."
          className="note-editor__textarea"
          ref={this.editInput}
          value={text}
          onChange={this.handleTextChange}
          onKeyDown={this.handleKeyDown}
        />
        <button className="add-button" onClick={this.handleNoteAdd}>
          Add
        </button>
      </div>
    )
  }
}

export default NoteEditor
