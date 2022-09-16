import React, { useState } from 'react';
import './LandingPage.scss';
import { useAppContext } from '../../../context/AppContext';
import { BsFillMapFill } from 'react-icons/bs';
import Button from '../../atoms/Button/Button';
import ClickableSearchBar from '../../molecules/ClickableSearchBar/ClickableSearchBar';
import ScrollableSelectionBar from '../../molecules/ScrollableSelectionBar/ScrollableSelectionBar';
import LandingPageCardsSection from '../../organisms/LandingPageCardsSection/LandingPageCardsSection';
import SearchModalPage from '../SearchModalPage/SearchModalPage';
import Modal from '../../organisms/Modal/Modal';
import { CreateAnimation } from '@ionic/react';

const LandingPage = () => {
    const { isModalOpen, setIsModalOpen, offset, scrollDirection } =
        useAppContext();

    const [modalType, setModalType] = useState('search');
    const [selectedTab, setSelectedTab] = useState(0);

    const handleSearchClick = () => {
        setModalType('search');
        setIsModalOpen(true);
    };

    const handleFilterClick = () => {
        setModalType('filter');
        setIsModalOpen(true);
    };

    return (
        <div className='LandingPage_container'>
            <div className='top_content'>
                <section className='searchbar_section'>
                    <ClickableSearchBar
                        handleSearchClick={handleSearchClick}
                        handleFilterClick={handleFilterClick}
                    />
                </section>
                <section className='selectionbar_section'>
                    <ScrollableSelectionBar
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    />
                </section>
            </div>
            <section className='cards_section'>
                <LandingPageCardsSection />
            </section>

            {/* modal starts */}
            {modalType === 'search' ? (
                <Modal
                    isModalOpen={isModalOpen}
                    modalContent={
                        <SearchModalPage
                            closeModal={() => setIsModalOpen(false)}
                        />
                    }
                    modalHeight={'100vh'}
                />
            ) : (
                <Modal
                    isModalOpen={isModalOpen}
                    modalContent={
                        <div
                            style={{ backgroundColor: '#FFF', height: '100%' }}
                        >
                            <button onClick={() => setIsModalOpen(false)}>
                                x
                            </button>
                            <h1>Filter Modal</h1>
                        </div>
                    }
                    modalHeight={'99vh'}
                />
            )}
            {/* modal ends */}

            <CreateAnimation
                duration={300}
                fromTo={[
                    {
                        property: 'bottom',
                        fromValue: '0px',
                        toValue: '70px',
                    },
                    { property: 'opacity', fromValue: '0', toValue: '1' },
                ]}
                play={offset >= 200}
            >
                <div
                    className={`map_btn ${offset < 200 ? 'hidden' : ''} ${
                        offset >= 1000 && scrollDirection === 'down'
                            ? 'move_down'
                            : ''
                    }`}
                >
                    <Button
                        btnContent={
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <span style={{ paddingRight: '5px' }}>Map</span>
                                <BsFillMapFill />
                            </div>
                        }
                        onButtonClick={() => {
                            alert('map clicked!');
                        }}
                        btnOptions={null}
                        btnStyleOverride={{
                            outline: '1px solid rgba(0, 0, 0, 0.08)',
                            borderRadius: '24px',
                            padding: '11px 19px',
                            color: '#FFF',
                            fontSize: '12px',
                            backgroundColor: 'rgb(34, 34, 34)',
                        }}
                    />
                </div>
            </CreateAnimation>
        </div>
    );
};

export default LandingPage;
