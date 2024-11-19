
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleCompany } from '../redux/cartActions'; 
import { acData } from '../data/ac'; 
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom'; 

const AcPage = () => {

  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
 
  const dispatch = useDispatch();


  const companyHandler = (company) => {
    dispatch(toggleCompany(company)); 
  };

  const filteredProduct = selectedProduct.length === 0 ? acData : acData.filter((item) => selectedProduct.includes(item.company));

  return (
    <>
      <Navbar />
      <div className="fullPage">
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


        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/ac/${item.id}`}>
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

export default AcPage;










// import { toggleCompany } from '../redux/selectedProductsSlice';

//   const filteredProduct = selectedProduct.length === 0 ? acData : acData.filter((i) => selectedProduct.includes(i.company));


//       <div className='fullPage'>
//         <div className='pro-selected'>
//           {acData.map((ac) => {
//             return (
//               <div className='pro-input'>
//                 <label>
//                   <input type='checkbox'
//                     checked={selectedProduct.includes(ac.company)}
//                     onChange={() => companyHandler(ac.company)}
//                   />
//                   {ac.company}
//                 </label>
//               </div>
//             )
//           })}
//         </div>


//         <div className='proModel'>
//              {item.company}, {item.model}
//          </div>


