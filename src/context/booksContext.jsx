import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext()



const BooksProvider = ({ children }) => {

    const [books, setBooks] = useState([])

    const fetchBooks = () => {
        httpClient.get('/books')
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
        httpClient.post('/books', book)
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
        httpClient.delete(`/books/${id}`)
            .then((res) => console.log(res))
            .catch(err => console.log(err))
    }

    const updateBook = (id, updatedBook) => {
        // update  ui
        setBooks(books.map((book) => book.id === id ? { ...book, ...updatedBook } : book))

        // update Server
        httpClient.put(`/${id}`, updatedBook)
            .then((res) => setBooks(books.map((book) => book.id === id ? { ...book, ...res.data } : book)))
            .catch((err) => console.log(err))
    }


    return <BooksContext.Provider value={{ books, addBook, deleteBook, updateBook }}>

        {children}

    </BooksContext.Provider>



}


export default BooksProvider