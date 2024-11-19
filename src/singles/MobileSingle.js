
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompany, addToCart } from '../stores/redux/cartActions';
import { mobileData } from '../stores/data/mobiles';
import Navbar from '../stores/components/Navbar';

const MobileSingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
  const product = mobileData.find((item) => item.id === id);

  const companyHandler = (company) => {
   
    dispatch(toggleCompany(company));
  };

  return (
    <>
      <Navbar />
      <div className="single">
        <div className="pro-selected">
          {mobileData.map((mobile) => {
            return (
              <div className="pro-input" key={mobile.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(mobile.company)}
                    onChange={() => companyHandler(mobile.company)} 
                  />
                  {mobile.company}
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
              <h2>{product.company}</h2>
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

export default MobileSingle;













// const MobileSingle = () => {
//   const { id } = useParams();  
//   const dispatch = useDispatch();  

  
//   const product = mobileData.find(item => item.id === id);

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));  
//   };









