import React, { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import './BottomBar.scss';
import { bottomBarIcons } from '../../../assets/data/bottom-bar-icons-data';

const BottomBar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className='BottomBar_container'>
            {bottomBarIcons.map((item, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                    <div key={idx} onClick={() => setSelectedIndex(idx)}>
                        <Icon
                            iconContent={item}
                            iconOverrideSize={'24px'}
                            iconOverrideColor={isSelected && '#ff5a5f'}
                            iconBottomPadding={'0.1rem'}
                            textOverrideSize={'0.625rem'}
                            textOverrideColor={isSelected && '#000'}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default BottomBar;
