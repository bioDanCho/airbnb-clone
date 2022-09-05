import React from 'react';
import './ClickableSearchBar.scss';
import { BiSearch } from 'react-icons/bi';
import Icon from '../../atoms/Icon/Icon';

const ClickableSearchBar = () => {
    return (
        <div className='container'>
            <div className='search'>
                <div className='icon'>
                    <Icon>
                        <BiSearch />
                    </Icon>
                </div>
                <div className='text'>
                    <div className='where'>Where to?</div>
                    <div className='any'>Anywhere • Any week • Add guests</div>
                </div>
            </div>
            <div className='settings'>
                <BiSearch />
            </div>
        </div>
    );
};

export default ClickableSearchBar;
