import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

// we can have as many as nested components we want

const Person = () => <h1>Mohammad Sadiq</h1>

const Message = () => {
  return <p>Assalaamoalaikum Sadiq</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting></Greeting>)
