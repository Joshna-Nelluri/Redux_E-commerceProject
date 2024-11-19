import React from 'react';
import { computerData } from '../data/computers';
import { Link } from 'react-router-dom';

const Computers = () => {

    const firstFiveImages = computerData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Computers</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`/computers/${item.id}`}>
                                    <div>
                                        <img className='proImage' src={item.image} alt='' />
                                    </div>
                                </Link>
                                <p className='proBox-name'>{item.model}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Computers;