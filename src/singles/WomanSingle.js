import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompany, addToCart } from '../stores/redux/cartActions';
import { womanData } from '../stores/data/woman';
import Navbar from '../stores/components/Navbar';

const WomanSingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
  const product = womanData.find((item) => item.id === id);

  const companyHandler = (brand) => {
   
    dispatch(toggleCompany(brand));
  };

  return (
    <>
      <Navbar />
      <div className="single">
        <div className="pro-selected">
          {womanData.map((woman) => {
            return (
              <div className="pro-input" key={woman.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(woman.brand)}
                    onChange={() => companyHandler(woman.brand)} 
                  />
                  {woman.brand}
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

export default WomanSingle;















// const WomanSingle = () => {

//     const { id } = useParams();
//     const dispatch = useDispatch();

//     const product = womanData.find(item => item.id === id);

//     const handleAddToCart = () => {
//         dispatch(addToCart(product));
//     }


//     )
// }

// export default WomanSingle;
