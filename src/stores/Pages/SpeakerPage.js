



import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { toggleCompany } from '../redux/cartActions'; 
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom'; 
import { speakerData } from '../data/speaker';

const SpeakerPage = () => {

  const selectedProduct = useSelector(state => state.selectedProduct.selectedProduct);
  
 
  const dispatch = useDispatch();


  const companyHandler = (brand) => {
    dispatch(toggleCompany(brand)); 
  };

  const filteredProduct = selectedProduct.length === 0 ? speakerData : speakerData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <Navbar />
      <div className="fullPage">
        <div className="pro-selected">
          {speakerData.map((speaker) => {
            return (
              <div className="pro-input" key={speaker.id}>
                <label>
                  <input 
                    type="checkbox"
                    checked={selectedProduct.includes(speaker.brand)} 
                    onChange={() => companyHandler(speaker.brand)} 
                  />
                  {speaker.brand}
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/speaker/${item.id}`}>
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

export default SpeakerPage;
