
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompany, addToCart } from '../stores/redux/cartActions';
import { computerData } from '../stores/data/computers';
import Navbar from '../stores/components/Navbar';

const ComputerSingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
  const product = computerData.find((item) => item.id === id);

  const companyHandler = (company) => {
   
    dispatch(toggleCompany(company));
  };

  return (
    <>
      <Navbar />
      <div className="single">
        <div className="pro-selected">
          {computerData.map((computer) => {
            return (
              <div className="pro-input" key={computer.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(computer.company)}
                    onChange={() => companyHandler(computer.company)} 
                  />
                  {computer.company}
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

export default ComputerSingle;






// const ComputerSingle = () => {

//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const product = computerData.find(item => item.id === id);

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   }
