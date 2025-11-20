import React from 'react'
import { FiBook } from 'react-icons/fi'

const Header = () => {
  return (
    <header>
      <nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FiBook size={28} style={{ color: '#6366f1' }} />
          <h1>BookManager</h1>
        </div>
        <ul>
          <li><a href="#books">Books</a></li>
          <li><a href="#add">Add Book</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header