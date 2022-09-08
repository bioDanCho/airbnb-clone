import React, { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import './BottomBar.scss';
import { bottomBarIcons } from '../../../assets/data/bottom-bar-icons-data';
import { Link } from 'react-router-dom';

const BottomBar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className='BottomBar_container'>
            {bottomBarIcons.map((item, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                    <Link
                        key={idx}
                        to={item.url}
                        onClick={() => setSelectedIndex(idx)}
                        style={{ textDecoration: 'none' }}
                    >
                        <Icon
                            iconContent={item}
                            iconOverrideSize={'24px'}
                            iconOverrideColor={isSelected && '#ff5a5f'}
                            iconBottomPadding={'0.1rem'}
                            textOverrideSize={'0.625rem'}
                            textOverrideColor={isSelected && '#000'}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default BottomBar;
