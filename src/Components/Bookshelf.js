import { useEffect, useState } from 'react';
import Books from './Books';






function Bookshelf({ bookshelf }) {



    const [title, setTitle] = useState();
    const [cover, setCover] = useState();

    const newBook = () => {
        const uploadData = new FormData();
        uploadData.append('BookTitle', title)
        uploadData.append('BookCover', cover, cover.name);


        // fetch('http://127.0.0.1:8000/books/', {
        //     method: 'POST',
        //     body: uploadData
        // }).then(res => console.log(res))
        //     .catch(error => console.log(error))

    }
    console.log(bookshelf.books)
    return (
        <div>
            {/* 
            <h1>I'm a bookshelf</h1>

            <label>Title<input type='text' value={title} onChange={
                (evt) => setTitle(evt.target.value)}
            ></input></label>
            <label>Cover<input type='file' onChange={
                (evt) => setCover(evt.target.files[0])}></input></label>
            <button onClick={() => newBook()}>New Book</button> */}

            {bookshelf.books?.map((book) => {
                return (

                    <Books bookid={book} />
                );
            })}






        </div>
    )
}

export default Bookshelf