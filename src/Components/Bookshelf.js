import { useEffect, useState } from 'react';
import Books from './Books';
import { ImageList, ImageListItem } from '@mui/material'
import bookshelficon from '../images/bookshelf.png';

import { motion } from "framer-motion";

import { v4 as uuid } from 'uuid';




function Bookshelf({ user, bookshelf, handle, handleDeleteBookshelfBook }) {

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

    const printnum = () => {
        console.log('hello');
    }

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };
    // console.log(bookshelf.books)
    return (
        <div className='bookshelflist'>
            < div className='bookshelfheader'>
                <img className='bookshelficon' style={{
                    display: 'flex', left: 100
                }} src={bookshelficon} />

                <h1 className='bookshelftitle'>Bookshelf</h1>
            </div>


            <ImageList key={user.id}
                cols={1} className="favimageList squares" style={{
                    display: 'flex', width: '345px'
                }}>


                <div className='listItem' key={bookshelf.id}>



                    {bookshelf.books?.map((book) => {

                        return (

                            <ImageListItem className='favbooklistitem' key={book.id}>
                                <Books printnum={printnum} bookid={book} handleDeleteBookshelfBook={handleDeleteBookshelfBook} />
                            </ImageListItem>

                        );
                    })}

                </div>
            </ImageList>
        </div>
    )
}

export default Bookshelf