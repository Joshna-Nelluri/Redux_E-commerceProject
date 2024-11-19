import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompany, addToCart } from '../stores/redux/cartActions';
import { booksData } from '../stores/data/books';
import Navbar from '../stores/components/Navbar';

const BookSingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
  const product = booksData.find((item) => item.id === id);
      console.log(product)

    if (!product) {
        return <div>Product not found</div>;
      }

  const companyHandler = (author) => {
   
    dispatch(toggleCompany(author));
  };

  return (
    <>
      <Navbar />
      <div className="single">
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

        <div className="back">
          <button onClick={() => window.history.go(-1)} className="backBtn">
            Back
          </button>
        </div>

        <div className="ind-section">
          <div className="ind-image">
            <img src={product.image} alt={product.model} />
          </div>

          <div className="ind-details space">
            <div className="ind-company">
              <h2>{product.author}</h2>
            </div>
            <div className="ind-model space">
              <h3>{product.title}</h3>
            </div>
            <div className="ind-price space">
              <h2>{product.price}</h2>
            </div>
            <div className="ind-desc space">
              <h2>{product.description}</h2>
            </div>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSingle;










// const BookSingle = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();

//     const product = booksData.find(item => item.id === id);
//     console.log(product)

//     if (!product) {
//         return <div>Product not found</div>;
//       }

//     const handleAddToCart = () => {
//         dispatch(addToCart(product));
//     }

