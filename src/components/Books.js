import React, { Component, useState, useContext } from 'react'
import { BookContext } from './context'



const Books = ({id,bookName,author,price})  => {
    const [books, setBooks] = useContext(BookContext);

    const DeleteBook = (id) =>{
        console.log(id);
        const newBooks = books.filter((item) => item.id !== id);
        setBooks(newBooks);
    }
   

        return (
          
                            <tr>

                                <th scope="row">{id}</th>
                                <td> {bookName} </td>
                                <td> {author} </td>
                                <td> {price}₺</td>
                                <td><button className="btn btn-danger" onClick={() => DeleteBook(id)} >Delete</button></td>
                               
                            </tr>
        )
    }
export default Books;