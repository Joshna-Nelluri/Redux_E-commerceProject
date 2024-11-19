import React from 'react';
import { mobileData } from '../data/mobiles';
import { Link } from 'react-router-dom';

const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Mobiles</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <>
                                <div className='proBox'>
                                    <Link to={`/mobiles/${item.id}`}>
                                        <div>
                                            <img className='proImage' src={item.image} alt='' />
                                        </div>
                                    </Link>
                                    <p className='proBox-name'>{item.model}</p>
                                    
                                </div>

                            </>

                        )
                    })
                }
            </div>
        </>
    )
}

export default Mobiles;
