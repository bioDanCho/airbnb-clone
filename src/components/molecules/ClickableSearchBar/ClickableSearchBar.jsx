import React from 'react';
import './ClickableSearchBar.scss';
import { BiSearch } from 'react-icons/bi';
import { BsToggles2 } from 'react-icons/bs';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';

const ClickableSearchBar = () => {
    const handleSearchBarClick = () => {
        console.log('search bar clicked!');
    };

    const handleButtonClick = () => {
        console.log('settings button clicked!');
    };

    const btnOptions = {
        hasBorder: true,
        hasPadding: true,
    };

    return (
        <div className='ClickableSearchBar_container'>
            <div className='search' onClick={handleSearchBarClick}>
                <div className='icon'>
                    <Icon iconContent={<BiSearch />} />
                </div>
                <div className='text'>
                    <div className='where'>Where to?</div>
                    <div className='any'>Anywhere • Any week • Add guests</div>
                </div>
            </div>
            <div className='settings'>
                <Button
                    btnContent={<BsToggles2 />}
                    btnOptions={btnOptions}
                    onButtonClick={handleButtonClick}
                />
            </div>
        </div>
    );
};

export default ClickableSearchBar;
