import React, { useState } from 'react';
import './LandingPage.scss';
import ClickableSearchBar from '../../molecules/ClickableSearchBar/ClickableSearchBar';
import Modal from '../Modal/Modal';
import ScrollableSelectionBar from '../../molecules/ScrollableSelectionBar/ScrollableSelectionBar';

const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ text: '' });
    const [selectedTab, setSelectedTab] = useState(0);

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
        <div style={{ position: 'relative' }}>
            <h1>Landing Page</h1>
            <section style={{ margin: '1rem 1.5rem 0rem' }}>
                <ClickableSearchBar
                    handleSearchClick={handleSearchClick}
                    handleFilterClick={handleFilterClick}
                />
            </section>
            <section style={{ margin: '1rem 0rem 0rem' }}>
                <ScrollableSelectionBar
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            </section>
            <Modal
                isModalOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                modalContent={modalContent}
            />
        </div>
    );
};

export default LandingPage;
