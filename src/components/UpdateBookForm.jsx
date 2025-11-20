import { useState } from "react"
const UpdateBookForm = ({ book, updateBook }) => {

  const [title, setTitle] = useState(book.title)
  const [author, setAuthor] = useState(book.author)

  const handleUpdate = () => {
    updateBook(book.id, { title, author })
    setTitle('')
    setAuthor('')

  }

  return (
    <div className="update-container">

      <div>
        <label htmlFor="title">Title: </label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" id="title" />
      </div>
      <div style={{ marginTop: "10px" }}>
        <label htmlFor="author">Author: </label>
        <input onChange={(e) => setAuthor(e.target.value)} value={author} type="text" id="author" />
      </div>

      <button style={{ marginTop: "10px" }} onClick={handleUpdate}>Update Book</button>

    </div>
  )
}

export default UpdateBookForm