import { useEffect, useState } from 'react';
import Books from './Books';
import { ImageList, ImageListItem } from '@mui/material'






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

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    };
    console.log(bookshelf.books)
    return (
        <div className='bookshelflist'>
            <ImageList
                cols={1} className="favimageList squares" style={{
                    display: 'flex', width: '345px',
                }}>
                <div className='listItem'>
                    {bookshelf.books?.map((book) => {
                        return (
                            <ImageListItem className='favbooklistitem' key={book.id}     >
                                <Books bookid={book} />
                            </ImageListItem>

                        );

                    })}

                </div>



            </ImageList>

        </div>
    )
}

export default Bookshelf