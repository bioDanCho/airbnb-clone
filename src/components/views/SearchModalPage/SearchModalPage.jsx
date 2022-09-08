import React from 'react';
import './SearchModalPage.scss';
import Button from '../../atoms/Button/Button';
import { GrFormClose } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';

const SearchModalPage = (props) => {
    const { closeModal } = props;

    const closeBtnStyle = {
        border: '1px solid #767676',
        borderRadius: '50%',
        padding: '0.25rem',
        backgroundColor: '#FFF',
    };

    const searchBtnStyle = {
        padding: '0.5rem 1rem',
        borderRadius: '7.5px',
        color: '#FFF',
        backgroundColor: '#FF385C',
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <div className='SearchModalPage_container'>
            <div className='close_btn'>
                <Button
                    onButtonClick={() => closeModal()}
                    btnContent={<GrFormClose />}
                    btnStyleOverride={closeBtnStyle}
                />
            </div>
            <div className='top'>
                <div>Stays</div>
                <div>Experiences</div>
            </div>
            <div className='cards'>
                <div>Where card</div>
                <div>When card</div>
                <div>Who card</div>
            </div>
            <div className='bottom'>
                <div>Clear all</div>
                <Button
                    onButtonClick={() => closeModal()}
                    btnContent={
                        <>
                            <BiSearch />
                            <span style={{ paddingLeft: '0.5rem' }}>
                                Search
                            </span>
                        </>
                    }
                    btnStyleOverride={searchBtnStyle}
                />
            </div>
        </div>
    );
};

export default SearchModalPage;
