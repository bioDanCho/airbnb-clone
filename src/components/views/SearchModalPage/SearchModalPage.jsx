import React, { useState } from 'react';
import './SearchModalPage.scss';
import Button from '../../atoms/Button/Button';
import { GrFormClose } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';
import SearchCards from '../../molecules/SearchCards/SearchCards';

const SearchModalPage = (props) => {
    const { closeModal } = props;
    const [selectedTab, setSelectedTab] = useState('Stays');
    const [selectedCard, setSelectedCard] = useState('Where');

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
                        title: 'Where to?',
                        collapsedTitle: 'Where',
                        collapsedDefaultText: "I'm flexible",
                    }}
                />
                <SearchCards
                    handleCardClick={handleCardClick}
                    isExpanded={selectedCard === 'When'}
                    searchCardsContent={{
                        title: "When's your trip?",
                        collapsedTitle: 'When',
                        collapsedDefaultText: 'Add dates',
                    }}
                />
                <SearchCards
                    handleCardClick={handleCardClick}
                    isExpanded={selectedCard === 'Who'}
                    searchCardsContent={{
                        title: "Who's coming?",
                        collapsedTitle: 'Who',
                        collapsedDefaultText: 'Add guests',
                    }}
                />
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
