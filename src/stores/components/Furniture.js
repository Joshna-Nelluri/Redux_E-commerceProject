import React from 'react';
import { furnitureData } from '../data/furniture';
import { Link } from 'react-router-dom';

const Furniture = () => {

    const firstFiveImages = furnitureData.slice(0, 6);

    return (
        <>
            <div className='proTitle'>
                <h2>Furniture</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveImages.map((item) => {
                        return (
                            <div className='proBox'>
                                <Link to={`/furniture/${item.id}`}>
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

export default Furniture;
