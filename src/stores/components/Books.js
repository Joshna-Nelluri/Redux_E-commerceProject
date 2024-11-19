import React from 'react';
import { booksData } from '../data/books';
import { Link } from 'react-router-dom';

const Books = () => {

    const firstFiveImages = booksData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Books</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`book/${item.id}`}>
                                   <div>
                                       <img className='proImage' src={item.image} alt='' />
                                    </div>
                                </Link>
                                
                                <p className='proBook-name'>{item.title}</p>
                                
                            </div>
            )
                    })
                }
        </div >
        </>
    )
}

export default Books
