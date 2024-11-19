import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompany, addToCart } from '../stores/redux/cartActions';
import { menData } from '../stores/data/men';
import Navbar from '../stores/components/Navbar';

const MenSingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
  const product = menData.find((item) => item.id === id);

  const companyHandler = (brand) => {
   
    dispatch(toggleCompany(brand));
  };

  return (
    <>
      <Navbar />
      <div className="single">
        <div className="pro-selected">
          {menData.map((men) => {
            return (
              <div className="pro-input" key={men.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(men.brand)}
                    onChange={() => companyHandler(men.brand)} 
                  />
                  {men.brand}
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

        <div className="ind-costume-section">
          <div className="ind-costume-image">
            <img src={product.image} alt={product.model} />
          </div>

          <div className="ind-costume-details space">
            <div className="ind-company">
              <h2>{product.brand}</h2>
            </div>
            <div className="ind-model space">
              <h3>{product.model}</h3>
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

export default MenSingle;














// const MenSingle = () => {

//     const { id } = useParams();
//     const dispatch = useDispatch();

//     const product = menData.find(item => item.id === id);

//     const handleAddToCart = () => {
//         dispatch(addToCart(product));
//     }

