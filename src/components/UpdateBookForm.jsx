import { useState } from "react"
import { FiX } from "react-icons/fi"

const UpdateBookForm = ({ book, updateBook, onClose }) => {

  const [title, setTitle] = useState(book.title)
  const [author, setAuthor] = useState(book.author)

  const handleUpdate = () => {
    updateBook(book.id, { title, author })
    setTitle('')
    setAuthor('')
    onClose?.()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="update-container">
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'transparent',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              width: '32px',
              height: '32px',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FiX size={20} />
          </button>

          <h3>Update Book</h3>

          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              id="title"
              placeholder="Enter book title"
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              type="text"
              id="author"
              placeholder="Enter author name"
            />
          </div>

          <button onClick={handleUpdate}>Update Book</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateBookForm