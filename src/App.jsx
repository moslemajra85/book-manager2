import { useState, useEffect } from "react"
import AddBookForm from "./components/AddBookForm"
import axios from "axios"


import BookList from "./components/BookList"
const App = () => {

  const [books, setBooks] = useState([])



  const fetchBooks = () => {


    axios.get('http://localhost:3000/books')
      .then((res) => {
        setBooks(res.data)
      }).catch(err => console.log(err))

  }

  useEffect(() => {
    fetchBooks()
  }, [])


  const addBook = (book) => {

    // update UI
    setBooks([...books, book])


    // update Server
    axios.post('http://localhost:3000/books', book)
      .then((res) => {
        setBooks([...books, res.data])
      }).catch((err) => {
        console.log(err)
      })

  }


  const deleteBook = (id) => {

    //update ui 
    setBooks(books.filter((book) => book.id !== id))

    //update server

    axios.delete(`http://localhost:3000/books/${id}`)
      .then((res) => console.log(res))
      .catch(err => console.log(err))

  }


  const updateBook = (id, updatedBook) => {

    // update  ui
    setBooks(books.map((book) => book.id === id ? { ...book, ...updatedBook } : book))

    // update Server
  }

  return (
    <div>

      <BookList books={books} deleteBook={deleteBook} updateBook={updateBook} />
      <AddBookForm addBook={addBook} />
    </div>
  )
}

export default App