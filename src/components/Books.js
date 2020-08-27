import React from 'react';



const Books = ({id,bookName,author,price})  => {


        return (
            
                            <tr>

                                <th scope="row">{id}</th>
                                <td> {bookName} </td>
                                <td> {author} </td>
                                <td> {price}₺</td>
                               
                            </tr>
        )
    }
export default Books;