import Book from "./Book"
import { useContext } from "react"
import { BooksContext } from "../context/booksContext"
const BookList = () => {

  const { books } = useContext(BooksContext)
  return (
    <section className="books-list-container" aria-labelledby="books-heading">
      <header className="books-list-header">
        <h2 id="books-heading">Library</h2>
        <div className="books-meta">{books?.length ?? 0} books</div>
      </header>

      <div className="books-grid">
        {books && books.length > 0 ? (
          books.map((book) => <Book  key={book.id} book={book} />)
        ) : (
          <div className="empty-state">No books added yet — start by adding one.</div>
        )}
      </div>
    </section>
  )
}

export default BookList