
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompany, addToCart } from '../stores/redux/cartActions';
import { tvData } from '../stores/data/tv';
import Navbar from '../stores/components/Navbar';

const TvSingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
  const product = tvData.find((item) => item.id === id);

  const companyHandler = (brand) => {
    dispatch(toggleCompany(brand));
  };

  return (
    <>
      <Navbar />
      <div className="single">
        <div className="pro-selected">
          {tvData.map((tv) => {
            return (
              <div className="pro-input" key={tv.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(tv.brand)}
                    onChange={() => companyHandler(tv.brand)} 
                  />
                  {tv.brand}
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

export default TvSingle;















// const TvSingle = () => {
//     const { id } = useParams(); 
//     // console.log(id); 

//     const dispatch = useDispatch();

//     const product = tvData.find(item => item.id === id);

//     // console.log(product); 
//     // console.log(product?.image); 
//     const imagePath = `/${product.image}`;  

//     // console.log(imagePath); 
//     const handleAddToCart = () => {
//         dispatch(addToCart(product)); 
//     };





// const handleImageError = (e) => {
//     e.target.src = '/assets/default-tv.jpg'; 
//     console.log('Error loading image, fallback used.');
// };