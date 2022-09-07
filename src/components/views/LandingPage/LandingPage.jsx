import React, { useState } from 'react';
import './LandingPage.scss';
import ClickableSearchBar from '../../molecules/ClickableSearchBar/ClickableSearchBar';
import Modal from '../Modal/Modal';
import ScrollableSelectionBar from '../../molecules/ScrollableSelectionBar/ScrollableSelectionBar';
import LandingPageCardsSection from '../../organisms/LandingPageCardsSection/LandingPageCardsSection';
import { useAppContext } from '../../../context/AppContext';

const LandingPage = () => {
    const [modalContent, setModalContent] = useState({ text: '' });
    const [selectedTab, setSelectedTab] = useState(0);
    const { isModalOpen, setIsModalOpen } = useAppContext();

    const handleSearchClick = () => {
        setModalContent({
            text: 'search modal',
        });
        setIsModalOpen(true);
    };

    const handleFilterClick = () => {
        setModalContent({
            text: 'filter modal',
        });
        setIsModalOpen(true);
    };

    return (
        <div className='LandingPage_container'>
            <div className='top'>
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

            {modalContent.text === 'search modal' ? (
                <Modal
                    isModalOpen={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
                    modalContent={modalContent}
                    modalHeight={'100vh'}
                />
            ) : (
                <Modal
                    isModalOpen={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
                    modalContent={modalContent}
                    modalHeight={'50vh'}
                />
            )}
        </div>
    );
};

export default LandingPage;
