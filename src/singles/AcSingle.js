
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompany, addToCart } from '../stores/redux/cartActions';
import { acData } from '../stores/data/ac';
import Navbar from '../stores/components/Navbar';

const AcSingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
  const product = acData.find((item) => item.id === id);

  const companyHandler = (company) => {
    dispatch(toggleCompany(company));
  };

  return (
    <>
      <Navbar />
      <div className="single">
        <div className="pro-selected">
          {acData.map((ac) => {
            return (
              <div className="pro-input" key={ac.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(ac.company)}
                    onChange={() => companyHandler(ac.company)} 
                  />
                  {ac.company}
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

export default AcSingle;











// const AcSingle = () => {

//     const { id } = useParams();
//     const dispatch = useDispatch();

//     const product = acData.find(item => item.id === id)

//     const handleAddToCart = () => {
//         dispatch(addToCart(product))
//     }




// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleCompany } from '../stores/redux/selectedProductsSlice';
// import { addToCart } from '../stores/redux/cartSlice';
// import { acData } from '../stores/data/ac';
// import Navbar from '../stores/components/Navbar';

// const AcSingle = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
  
//   // Retrieve the selected products from Redux store
//   const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
//   // Find the specific product from acData based on the id
//   const product = acData.find((item) => item.id === id);

//   // Handler to toggle company selection
//   const companyHandler = (company) => {
//     dispatch(toggleCompany(company)); // Dispatch the toggleCompany action
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="single">
//         <div className="pro-selected">
//           {acData.map((ac) => (
//             <div className="pro-input" key={ac.id}>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={selectedProduct.includes(ac.company)}
//                   onChange={() => companyHandler(ac.company)} 
//                 />
//                 {ac.company}
//               </label>
//             </div>
//           ))}
//         </div>

//         <div className="back">
//           <button onClick={() => window.history.go(-1)} className="backBtn">
//             Back
//           </button>
//         </div>

//         <div className="ind-section">
//           <div className="ind-image">
//             <img src={product.image} alt={product.model} />
//           </div>

//           <div className="ind-details space">
//             <div className="ind-company">
//               <h2>{product.company}</h2>
//             </div>
//             <div className="ind-model space">
//               <h3>{product.model}</h3>
//             </div>
//             <div className="ind-price space">
//               <h2>{product.price}</h2>
//             </div>
//             <div className="ind-desc space">
//               <h2>{product.description}</h2>
//             </div>
//             <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AcSingle;
