// import React, { useState } from 'react';
// import { mobileData } from '../data/mobiles';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

// const MobilesPage = () => {

//     const [selectedProduct, setSelectedProduct] = useState([]);

//     const companyHandler = (it) => {
//         if (selectedProduct.includes(it)) {
//             setSelectedProduct(selectedProduct.filter(item => item !== it));
//         }
//         else {
//             setSelectedProduct([...selectedProduct, it])
//         }
//     }

//     const filteredProduct = selectedProduct.length === 0 ? mobileData : mobileData.filter((i) => selectedProduct.includes(i.company));
//     return (
//         <>
//             <Navbar />
//             <div className='fullPage'>
//                 <div className='pro-selected'>
//                     {mobileData.map((phone) => {
//                         return (
//                             <div className='pro-input'>
//                                 <label>
//                                     <input type='checkbox'
//                                         checked={selectedProduct.includes(phone.company)}
//                                         onChange={() => companyHandler(phone.company)}
//                                     />
//                                     {phone.company}
//                                 </label>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <div className='pageSection'>
//                     {filteredProduct.map((item) => {
//                         return (
//                             <div>
//                                 <Link to={`/mobiles/${item.id}`}>
//                                     <div className='pageImg'>
//                                         <img src={item.image} alt='' />
//                                     </div>
//                                 </Link>

//                                 <div className='proModel'>
//                                     {item.company}, {item.model}
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MobilesPage


import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleCompany } from '../redux/cartActions'; 
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom'; 
import { mobileData } from '../data/mobiles';

const MobilePage = () => {

  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
 
  const dispatch = useDispatch();


  const companyHandler = (company) => {
    dispatch(toggleCompany(company)); 
  };

  const filteredProduct = selectedProduct.length === 0 ? mobileData : mobileData.filter((item) => selectedProduct.includes(item.company));

  return (
    <>
      <Navbar />
      <div className="fullPage">
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

        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/mobiles/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt={item.model} />
                  </div>
                </Link>

                <div className="proModel">
                  {item.company}, {item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobilePage;
