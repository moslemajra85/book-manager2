import { useState } from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import UpdateBookForm from './UpdateBookForm'
import { useContext } from 'react'
import { BooksContext } from '../context/booksContext'
const Book = ({ book }) => {

  const [updateVisible, setUpdateVisible] = useState(false)

  return (
    <>
      <article className="book-card" aria-label={`Book: ${book.title}`}>
        <img
          className="book-cover"
          src={book.cover || 'https://picsum.photos/300/420'}
          alt={book.title}
          width="300"
          height="420"
        />

        <div className="book-body">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
        </div>

        <div className="book-actions" aria-hidden="false">
          <button onClick={() => setUpdateVisible(true)} type="button" className="icon-btn" title="Edit book" aria-label={`Edit ${book.title}`}>
            <FiEdit2 />
          </button>

          <button onClick={() => deleteBook(book.id)} type="button" className="icon-btn icon-btn--danger" title="Delete book" aria-label={`Delete ${book.title}`}>
            <FiTrash2 />
          </button>
        </div>
      </article>

      {updateVisible && <UpdateBookForm book={book} updateBook={updateBook} onClose={() => setUpdateVisible(false)} />}
    </>
  )
}

export default Book