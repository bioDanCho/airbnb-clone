import React, { useState } from 'react';
import './LandingPage.scss';
import ClickableSearchBar from '../../molecules/ClickableSearchBar/ClickableSearchBar';
import Modal from '../Modal/Modal';

const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ text: '' });

    const handleSearchClick = () => {
        setModalContent({
            text: 'search modal',
        });
        setIsModalOpen(true);
    };

    const handleSettingsClick = () => {
        setModalContent({
            text: 'settings modal',
        });
        setIsModalOpen(true);
    };

    return (
        <div style={{ position: 'relative' }}>
            <h1>Landing Page</h1>
            <div style={{ margin: '1rem 1.5rem' }}>
                <ClickableSearchBar
                    handleSearchClick={handleSearchClick}
                    handleSettingsClick={handleSettingsClick}
                />
            </div>
            <Modal
                isModalOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                modalContent={modalContent}
            />
        </div>
    );
};

export default LandingPage;
