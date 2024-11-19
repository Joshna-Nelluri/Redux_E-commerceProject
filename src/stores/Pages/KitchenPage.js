// import React, { useState } from 'react';
// import { kitchenData } from '../data/kitchen';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

// const KitchenPage = () => {
//     const [selectedProduct, setSelectedProduct] = useState([]);

//     const companyHandler = (it) => {
//         if(selectedProduct.includes(it)){
//             setSelectedProduct(selectedProduct.filter(item => item !== it));
//         }
//         else{
//             setSelectedProduct([...selectedProduct, it]);
//         }
//     }

//     const filteredProduct = selectedProduct.length === 0 ? kitchenData : kitchenData.filter((i) => selectedProduct.includes(i.brand));
//   return (
//     <>
//       <Navbar />
//       <div className='fullPage'>
//         <div className='pro-selected'>
//             {kitchenData.map((kitchen) => {
//                 return(
//                     <div className='pro-input'>
//                         <label>
//                             <input type='checkbox'
//                                checked={selectedProduct.includes(kitchen.brand)}
//                                onChange={() => companyHandler(kitchen.brand)}
//                             />
//                             {kitchen.brand}
//                         </label>
//                     </div>
//                 )
//             })}
//         </div>
//         <div className='pageSection'>
//             {filteredProduct.map((item) => {
//                 return(
//                     <div>
//                         <Link to={`/kitchen/${item.id}`}>
//                            <div className='pageImg'>
//                               <img src={item.image} alt='' />
//                            </div>
//                         </Link>
//                         <div className='preModal'>
//                             {item.brand}, {item.model}
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//       </div>
//     </>
//   )
// }

// export default KitchenPage




import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleCompany } from '../redux/cartActions'; 
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom'; 
import { kitchenData } from '../data/kitchen';


const KitchenPage = () => {

  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
 
  const dispatch = useDispatch();


  const companyHandler = (brand) => {
    dispatch(toggleCompany(brand)); 
  };

  const filteredProduct = selectedProduct.length === 0 ? kitchenData : kitchenData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullPage">
        <div className="pro-selected">
          {kitchenData.map((kitchen) => {
            return (
              <div className="pro-input" key={kitchen.id}>
                <label>
                  <input 
                    type="checkbox"
                    checked={selectedProduct.includes(kitchen.brand)} 
                    onChange={() => companyHandler(kitchen.brand)} 
                  />
                  {kitchen.brand}
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/kitchen/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt={item.model} />
                  </div>
                </Link>

                <div className="proModel">
                  {item.brand}, {item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default KitchenPage;