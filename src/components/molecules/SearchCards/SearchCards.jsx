import React from 'react';
import Button from '../../atoms/Button/Button';
import { BiSearch } from 'react-icons/bi';
import './SearchCards.scss';

const SearchCards = (props) => {
    const { isExpanded, handleCardClick, searchCardsContent } = props;
    const { title, collapsedTitle, collapsedDefaultText } = searchCardsContent;

    if (isExpanded) {
        return (
            <div
                className={`SearchCards_container ${
                    isExpanded ? 'shadow' : ''
                }`}
                onClick={() => handleCardClick(collapsedTitle)}
            >
                <div className='expanded_container'>
                    <div className='title'>{title}</div>
                    <Button
                        onButtonClick={() =>
                            alert('Search destinations clicked!')
                        }
                        btnContent={
                            <>
                                <BiSearch />
                                <span
                                    style={{
                                        paddingLeft: '1rem',
                                        color: '#767676',
                                    }}
                                >
                                    Search destinations
                                </span>
                            </>
                        }
                        btnStyleOverride={{
                            padding: '1rem 1rem',
                            border: '1px solid #767676',
                            borderRadius: '10px',
                            color: '#000',
                            backgroundColor: '#FFF',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    />
                    <div>more stuff</div>
                    <div>more stuff</div>
                    <div>more stuff</div>
                    <div>more stuff</div>
                    <div>more stuff</div>
                </div>
            </div>
        );
    }
    return (
        <div
            className='SearchCards_container'
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
