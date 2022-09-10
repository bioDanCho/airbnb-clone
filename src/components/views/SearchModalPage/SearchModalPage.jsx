import React, { useState } from 'react';
import './SearchModalPage.scss';
import Button from '../../atoms/Button/Button';
import { GrFormClose } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';
import SearchCards from '../../molecules/SearchCards/SearchCards';
import { useAppContext } from '../../../context/AppContext';

const SearchModalPage = (props) => {
    const { closeModal } = props;
    const [selectedTab, setSelectedTab] = useState('Stays');
    const [selectedCard, setSelectedCard] = useState('Where');
    const { setSearchData } = useAppContext();

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

    const handleCardClick = (cardType) => {
        setSelectedCard(cardType);
    };

    const handleCloseClick = () => {
        // need to update when context changes
        setSearchData({
            where: {
                destination: '',
            },
            when: {},
            who: {},
        });
        setSelectedTab('Stays');
        setSelectedCard('Where');
        closeModal();
    };

    return (
        <div className='SearchModalPage_container'>
            <div className='close_btn'>
                <Button
                    onButtonClick={handleCloseClick}
                    btnContent={<GrFormClose />}
                    btnStyleOverride={closeBtnStyle}
                />
            </div>
            <div className='top'>
                <div
                    className={`tab ${
                        selectedTab === 'Stays' ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedTab('Stays')}
                >
                    Stays
                </div>
                <div
                    className={`tab ${
                        selectedTab === 'Experiences' ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedTab('Experiences')}
                >
                    Experiences
                </div>
            </div>
            <div className='cards'>
                <SearchCards
                    handleCardClick={handleCardClick}
                    isExpanded={selectedCard === 'Where'}
                    searchCardsContent={{
                        collapsedTitle: 'Where',
                        collapsedDefaultText: "I'm flexible",
                    }}
                />
                <SearchCards
                    handleCardClick={handleCardClick}
                    isExpanded={selectedCard === 'When'}
                    searchCardsContent={{
                        collapsedTitle: 'When',
                        collapsedDefaultText: 'Add dates',
                    }}
                />
                <SearchCards
                    handleCardClick={handleCardClick}
                    isExpanded={selectedCard === 'Who'}
                    searchCardsContent={{
                        collapsedTitle: 'Who',
                        collapsedDefaultText: 'Add guests',
                    }}
                />
            </div>
            <div className='bottom'>
                <div
                    className='clear'
                    onClick={() =>
                        // need to update when context changes
                        setSearchData({
                            where: {
                                destination: '',
                            },
                            when: {},
                            who: {},
                        })
                    }
                >
                    Clear all
                </div>
                <Button
                    onButtonClick={() => alert('search clicked!')}
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
