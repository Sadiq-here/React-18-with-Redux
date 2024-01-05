import React from 'react'
import ReactDom from 'react-dom/client'

import './index.css'

const BookList = () => {
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg'
    alt='Atomic Habits:'
  />
)
const Title = () => (
  <h2>Atomic Habits: An Easy & Proven Way to Build Good Habits</h2>
)
const Author = () => {
  return <h4>James Clear</h4>
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList />)
