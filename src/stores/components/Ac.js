import React from 'react';
import { acData } from '../data/ac';
import { Link } from 'react-router-dom';

const Ac = () => {

    const firstFiveImages = acData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>AC's</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`ac/${item.id}`}>
                                    <div>
                                        <img className='proImage' src={item.image} alt='' />
                                    </div>
                                </Link>

                                <p className='proBox-name'>{item.company}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Ac;
