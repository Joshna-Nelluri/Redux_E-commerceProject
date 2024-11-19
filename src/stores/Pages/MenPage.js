// import React, { useState } from 'react';
// import { menData } from '../data/men';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

// const MenPage = () => {

//     const [selectedProduct, setSelectedProduct] = useState([]);

//     const companyHandler = (it) => {
//         if(selectedProduct.includes(it)){
//             setSelectedProduct(selectedProduct.filter(item => item !== it))
//         }
//         else{
//             setSelectedProduct([...selectedProduct, it])
//         }
//     }

//     const filteredProduct = selectedProduct.length === 0 ? menData : menData.filter((i) => selectedProduct.includes(i.brand));
//   return (
//     <>
//       <Navbar />
//       <div className='fullPage'>
//         <div className='pro-selected'>
//             {menData.map((men) => {
//                 return(
//                     <div className='pro-input'>
//                         <label>
//                             <input type='checkbox'
//                                checked = {selectedProduct.includes(men.brand)} 
//                                onChange={() => companyHandler(men.brand)}
//                             />
//                             {men.brand}
//                         </label>
//                     </div>
//                 )
//             })}
//         </div>
//         <div className='pageSection'>
//             {filteredProduct.map((item) => {
//                 return(
//                     <div>
//                         <Link to={`/menswear/${item.id}`}>
//                             <div className='pageImg'>
//                                 <img src={item.image} alt='' />
//                             </div>
//                         </Link>

//                         <div className='proModel'>
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

// export default MenPage;




import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleCompany } from '../redux/cartActions'; 
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom'; 
import { menData } from '../data/men';


const MenPage = () => {

  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
 
  const dispatch = useDispatch();


  const companyHandler = (brand) => {
    dispatch(toggleCompany(brand)); 
  };

  const filteredProduct = selectedProduct.length === 0 ? menData : menData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullPage">
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

        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/menswear/${item.id}`}>
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

export default MenPage;