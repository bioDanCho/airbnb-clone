import React, { useMemo } from 'react';
import './Button.scss';

const Button = (props) => {
    const { btnContent, btnOptions, onButtonClick } = props;

    const btnClasses = ['Button_container'];
    useMemo(() => {
        if (btnOptions.hasBorder) {
            btnClasses.push('border');
        }
        if (btnOptions.hasPadding) {
            btnClasses.push('padding');
        }
    }, [btnOptions]);

    return (
        <div className='Button_container' onClick={onButtonClick}>
            <div className={btnClasses.join(' ')}>{btnContent}</div>
        </div>
    );
};

export default Button;
