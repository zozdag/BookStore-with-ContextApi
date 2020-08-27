import React,{useState,useContext} from 'react'
import {BookContext} from './context'

const NewBook = () => {

    const [bookName,setBookName] = useState('');
    const [author,setAuthor] = useState('');
    const [price,setPrice] = useState('');
    const [books,setBooks] = useContext(BookContext);


    const updatebookName = (e) => {
        setBookName(e.target.value);
    }

    const updateAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const updatePrice = e => {
        setPrice(e.target.value);
    }


    const AddBook = e =>{

        e.preventDefault();
        setBooks(lastBooks => [...lastBooks,{bookName:bookName,author:author,price:price}])
        

    }

    return (
        <div>
            <form onSubmit={AddBook}>
                <input type="text" name="bookName" value={bookName} onChange={updatebookName} />
                <input type="text" name="author" value={author} onChange={updateAuthor} />
                <input type="text" name="price" value={price} onChange={updatePrice} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default NewBook;