import React, { useState } from 'react';
import './LandingPage.scss';
import { useAppContext } from '../../../context/AppContext';
import { BsFillMapFill } from 'react-icons/bs';
import Button from '../../atoms/Button/Button';
import AnimatedDiv from '../../atoms/AnimatedDiv/AnimatedDiv';
import ClickableSearchBar from '../../molecules/ClickableSearchBar/ClickableSearchBar';
import ScrollableSelectionBar from '../../molecules/ScrollableSelectionBar/ScrollableSelectionBar';
import LandingPageCardsSection from '../../organisms/LandingPageCardsSection/LandingPageCardsSection';
import Modal from '../../organisms/Modal/Modal';
import BottomBar from '../../molecules/BottomBar/BottomBar';

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
                    modalHeight={'99vh'}
                />
            )}

            <div className='bottom_content'>
                <AnimatedDiv
                    animProgress={[0, 0.1, 0.4, 0.5]}
                    opacityProgress={[0, 1, 1, 1]}
                    // xPosProgress={[0, 0]}
                    yPosProgress={[0, 0, 0, 60]}
                >
                    <div className='map_btn'>
                        <Button
                            btnContent={
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <span style={{ paddingRight: '5px' }}>
                                        Map
                                    </span>
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
                </AnimatedDiv>

                {/* this is hidden for now */}
                <AnimatedDiv
                    animProgress={[0, 0.1, 0.4, 0.5]}
                    opacityProgress={[1, 1, 1, 1]}
                    yPosProgress={[0, 0, 0, 70]}
                >
                    <div className='bottom_bar'>
                        <BottomBar />
                    </div>
                </AnimatedDiv>
            </div>
        </div>
    );
};

export default LandingPage;
