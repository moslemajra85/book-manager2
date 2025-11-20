import { set } from "mongoose"
import { useState } from "react"
const AddBookForm = ({ addBook }) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    addBook({ title, author })

    setTitle('')
    setAuthor('')
  }



  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="title">Title: </label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" id="title" />
      </div>
      <div>
        <label htmlFor="author">Author: </label>
        <input onChange={(e) => setAuthor(e.target.value)} value={author} type="text" id="author" />
      </div>

      <button>Add Book</button>

    </form>
  )
}

export default AddBookForm