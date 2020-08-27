import React, { Component,useState,useContext } from 'react'
import {BookContext} from './context'
import Books from './Books'

const Store = () => {
    const [books,setBooks] = useContext(BookContext);
    
        return (
            <div>
                
                   
                        
                       
                            <div>
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            
                                            <th scope="col">#id</th>
                                            <th scope="col">#bookName</th>
                                            <th scope="col">#Author</th>
                                            <th scope="col">#Price</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            books.map(book => {
                                                return (
                                                    <Books
                                                        key={book.id}
                                                        id={book.id}
                                                        bookName={book.bookName}
                                                        author={book.author}
                                                        price={book.price}
                                                    />
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        
                    
                
            </div>
        )
    }

export default Store;