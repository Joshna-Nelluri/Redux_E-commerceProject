// import React, { useState } from 'react';
// import { booksData } from '../data/books';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

// const BooksPage = () => {

//     const [selectedProduct, setSelectedProduct] = useState([]);

//     const companyHandler = (it) => {
//         if (selectedProduct.includes(it)) {
//             setSelectedProduct(selectedProduct.filter(item => item !== it))
//         }
//         else {
//             setSelectedProduct([...selectedProduct, it])
//         }
//     }

//     const filteredProduct = selectedProduct.length === 0 ? booksData : booksData.filter((i) => selectedProduct.includes(i.author))
//     return (
//         <>
//             <Navbar />
//             <div className='fullPage'>
//                 <div className='pro-selected'>
//                     {booksData.map((book) => {
//                         return (
//                             <div className='pro-input'>
//                                 <label>
//                                     <input type='checkbox'
//                                         checked={selectedProduct.includes(book.author)}
//                                         onChange={() => companyHandler(book.author)}
//                                     />
//                                     {book.author}
//                                 </label>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <div className='pageSection'>
//                     {filteredProduct.map((item) => {
//                         return (
//                             <div>
//                                 <Link to={`/book/${item.id}`}>
//                                     <div className='pageImg'>
//                                         <img src={item.image} alt='' />
//                                     </div>
//                                 </Link>

//                                 <div className='proModel bookModel'>
//                                     {item.author}, {item.category}
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default BooksPage


import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleCompany } from '../redux/cartActions'; 
import { booksData } from '../data/books'; 
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom'; 

const BookPage = () => {

  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
 
  const dispatch = useDispatch();


  const companyHandler = (author) => {
    dispatch(toggleCompany(author)); 
  };

  const filteredProduct = selectedProduct.length === 0 ? booksData : booksData.filter((item) => selectedProduct.includes(item.author));

  return (
    <>
      <Navbar />
      <div className="fullPage">
        <div className="pro-selected">
          {booksData.map((book) => {
            return (
              <div className="pro-input" key={book.id}>
                <label>
                  <input 
                    type="checkbox"
                    checked={selectedProduct.includes(book.author)} 
                    onChange={() => companyHandler(book.author)} 
                  />
                  {book.author}
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/ac/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt={item.model} />
                  </div>
                </Link>

                <div className="proModel">
                  {item.author}, {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookPage;
