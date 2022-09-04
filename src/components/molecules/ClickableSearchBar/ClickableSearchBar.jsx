import React from 'react';
import './ClickableSearchBar.scss';
import { FaBeer } from 'react-icons/fa';

const ClickableSearchbar = () => {
    return (
        <div className='container'>
            <FaBeer />
            <div className='text'>
                <div className='where'>Where to?</div>
                <div className='any'>Anywhere • Any week • Add guests</div>
            </div>
            <FaBeer />
        </div>
    );
};

export default ClickableSearchbar;
