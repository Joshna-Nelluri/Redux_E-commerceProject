// import React, { useState } from 'react';
// import { watchData } from '../data/watch';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

// const WatchPage = () => {

//     const [selectedProduct, setSelectedProduct] = useState([]);

//     const companyHandler = (it) => {
//         if (selectedProduct.includes(it)) {
//             setSelectedProduct(selectedProduct.filter(item => item !== it));
//         }
//         else {
//             setSelectedProduct([...selectedProduct, it])
//         }
//     }

//     const filteredProduct = selectedProduct.length === 0 ? watchData :watchData.filter((i) => selectedProduct.includes(i.brand))
//     return (
//         <>
//             <Navbar />
//             <div className='fullPage'>
//                 <div className='pro-selected'>
//                     {watchData.map((watch) => {
//                         return (
//                             <div className='pro-input'>
//                                 <label>
//                                     <input type='checkbox'
//                                         checked={selectedProduct.includes(watch.brand)}
//                                         onChange={() => companyHandler(watch.brand)}
//                                     />
//                                     {watch.brand}
//                                 </label>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <div className='pageSection'>
//                     {filteredProduct.map((item) => {
//                         return (
//                             <div>
//                                 <Link to={`/watches/${item.id}`}>
//                                     <div className='pageImg'>
//                                         <img src={item.image} alt='' />
//                                     </div>
//                                 </Link>

//                                 <div className='proModel'>
//                                     {item.brand}, {item.model}
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default WatchPage



import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleCompany } from '../redux/cartActions'; 
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom'; 
import { watchData } from '../data/watch';

const WatchPage = () => {

  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
 
  const dispatch = useDispatch();


  const companyHandler = (brand) => {
    dispatch(toggleCompany(brand)); 
  };

  const filteredProduct = selectedProduct.length === 0 ? watchData : watchData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullPage">
        <div className="pro-selected">
          {watchData.map((watch) => {
            return (
              <div className="pro-input" key={watch.id}>
                <label>
                  <input 
                    type="checkbox"
                    checked={selectedProduct.includes(watch.brand)} 
                    onChange={() => companyHandler(watch.brand)} 
                  />
                  {watch.brand}
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/watches/${item.id}`}>
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

export default WatchPage;
