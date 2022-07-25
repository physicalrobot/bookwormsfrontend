import React from 'react'
import { useEffect } from "react"
import '../bookcollection.css';
import { Link } from 'react-router-dom';

function Filter({ collection, setFiltered, activeGenre, setActiveGenre }) {

  const bookgen = collection.map((book) => book.BookGenre.includes(2))
  useEffect(() => {

    function runfilter() {
      if (activeGenre !== 0) { return collection.filter((book) => book.BookGenre.includes(activeGenre)) } else { return collection }
    }

    const filtered = runfilter()
    setFiltered(filtered)
    console.log(filtered)
    console.log(activeGenre)


  }, [activeGenre])
  return (
    <div className='filtercontainer'>
      <button className={activeGenre == 0 ? "focus" : ""} onClick={() => setActiveGenre(0)}>All</button>
      <button className={activeGenre === 1 ? "focus" : ""} onClick={() => setActiveGenre(1)}>Fantasy</button>
      <button className={activeGenre === 3 ? "focus" : ""} onClick={() => setActiveGenre(3)}>Sci-Fi</button>
      <button>Horror</button>
      <button>Non-Fiction</button>
      <Link className='addbookbutton' to="/newbook"><button>add book</button></Link>

      <input className='searchbooks' placeholder='search books'></input>




    </div >
  )
}

export default Filter