import React from 'react';
import './Icon.scss';

const Icon = (props) => {
    const {
        iconContent,
        isSelected,
        iconOverrideColor,
        textOverrideColor,
        iconOverrideSize,
    } = props;
    const { icon, text } = iconContent;

    return (
        <div className={`Icon_container ${!isSelected ? 'notSelected' : ''}`}>
            <div
                style={{
                    color: iconOverrideColor ? iconOverrideColor : '',
                    fontSize: iconOverrideSize ? iconOverrideSize : '',
                }}
            >
                {icon}
            </div>
            {text && (
                <span
                    className='text'
                    style={{
                        color: textOverrideColor ? textOverrideColor : '',
                    }}
                >
                    {text}
                </span>
            )}
        </div>
    );
};

export default Icon;
