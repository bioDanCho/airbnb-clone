import React from 'react';
import './RoomsCards.scss';

const RoomsCards = () => {
    return (
        <div className='RoomsCards_container'>
            <div className='carousel'>image carousel</div>
            <div className='content'>
                <div className='location_and_rank'>
                    <div>Mill Creek, Pennsylvania, US</div>
                    <div>
                        &#9733; <span>4.95</span>
                    </div>
                </div>
                <div className='distance'>376km</div>
                <div className='dates'>Apr. 15 - 20</div>
                <div className='price'>$233 night</div>
            </div>
        </div>
    );
};

export default RoomsCards;
