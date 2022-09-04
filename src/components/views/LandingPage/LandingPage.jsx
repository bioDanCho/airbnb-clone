import React from 'react';
import './LandingPage.scss';
import ClickableSearchBar from '../../molecules/ClickableSearchBar/ClickableSearchBar';

const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <div style={{ margin: '1rem 1.5rem' }}>
                <ClickableSearchBar />
            </div>
        </div>
    );
};

export default LandingPage;
