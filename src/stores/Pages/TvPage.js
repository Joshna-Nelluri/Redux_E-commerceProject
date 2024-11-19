// import React, { useState } from 'react';
// import { tvData } from '../data/tv';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

// const TvPage = () => {
//   const [selectedProduct, setSelectedProduct] = useState([]);

//   const companyHandler = (it) => {
//     if (selectedProduct.includes(it)) {
//       setSelectedProduct(selectedProduct.filter(item => item !== it));
//     }
//     else {
//       setSelectedProduct([...selectedProduct, it])
//     }
//   }
//   const filteredProduct = selectedProduct.length === 0 ? tvData : tvData.filter((i) => selectedProduct.includes(i.brand));
//   return (
//     <>
//       <Navbar />
//       <div className='fullPage'>
//         <div className='pro-selected'>
//           {tvData.map((tv) => {
//             return (
//               <div className='pro-input'>
//                 <label>
//                   <input type='checkbox'
//                     checked={selectedProduct.includes(tv.brand)}
//                     onChange={() => companyHandler(tv.brand)}
//                   />
//                   {tv.brand}
//                 </label>
//               </div>
//             )
//           })}
//         </div>
//         <div className='pageSection'>
//           {filteredProduct.map((item) => {
//             return (
//               <div>
//                 <Link to={`/tv/${item.id}`}>
//                   <div className='pageImg'>
//                     <img src={item.image} alt='' />
//                   </div>
//                 </Link>

//                 <div className='proModel'>
//                   {item.brand}, {item.model}
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </>
//   )
// }

// export default TvPage



import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleCompany } from '../redux/cartActions'; 
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom'; 
import { tvData } from '../data/tv';

const TvPage = () => {

  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
 
  const dispatch = useDispatch();


  const companyHandler = (brand) => {
    dispatch(toggleCompany(brand)); 
  };

  const filteredProduct = selectedProduct.length === 0 ? tvData : tvData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullPage">
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

        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/tv/${item.id}`}>
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

export default TvPage;
