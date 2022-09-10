import React from 'react';
import Button from '../../atoms/Button/Button';
import { BiSearch } from 'react-icons/bi';
import './SearchCards.scss';
import { useAppContext } from '../../../context/AppContext';
import WhereCard from './WhereCard/WhereCard';

const SearchCards = (props) => {
    const { isModalOpen } = useAppContext();
    const { isExpanded, handleCardClick, searchCardsContent } = props;
    const { collapsedTitle, collapsedDefaultText } = searchCardsContent;

    if (isExpanded) {
        return (
            <div
                className={`SearchCards_container ${
                    isExpanded ? 'shadow' : ''
                }`}
                onClick={() => handleCardClick(collapsedTitle)}
            >
                <div className='expanded_container'>
                    <WhereCard />
                </div>
            </div>
        );
    }

    return (
        <div
            className={`SearchCards_container ${isModalOpen ? 'animate' : ''}`}
            onClick={() => handleCardClick(collapsedTitle)}
        >
            <div className='collapsed_container'>
                <div className='short_title'>{collapsedTitle}</div>
                <div>{collapsedDefaultText}</div>
            </div>
        </div>
    );
};

export default SearchCards;
