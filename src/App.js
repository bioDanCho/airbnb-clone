import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import WishlistsPage from './components/views/WishlistsPage/WishlistsPage';
import TripsPage from './components/views/TripsPage/TripsPage';
import InboxPage from './components/views/InboxPage/InboxPage';
import ProfilePage from './components/views/ProfilePage/ProfilePage';
import AnimatedDiv from './components/atoms/AnimatedDiv/AnimatedDiv';
import BottomBar from './components/molecules/BottomBar/BottomBar';

// ionic
import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';
import { useAppContext } from './context/AppContext';
import { CreateAnimation } from '@ionic/react';

setupIonicReact({
    mode: 'md',
});

const App = () => {
    const { offset, scrollDirection } = useAppContext();

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/wishlists' element={<WishlistsPage />}></Route>
                <Route path='/trips' element={<TripsPage />}></Route>
                <Route path='/inbox' element={<InboxPage />}></Route>
                <Route path='/profile' element={<ProfilePage />}></Route>
            </Routes>
            <CreateAnimation
                duration={300}
                fromTo={[
                    {
                        property: 'bottom',
                        fromValue: '-70px',
                        toValue: '-1px',
                    },
                    { property: 'opacity', fromValue: '0', toValue: '1' },
                ]}
                play={offset < 1000 || scrollDirection === 'up'}
            >
                <div
                    className={`bottom_bar_navigation ${
                        offset >= 1000 && scrollDirection === 'down'
                            ? 'hidden'
                            : ''
                    }`}
                >
                    <BottomBar />
                </div>
            </CreateAnimation>
        </BrowserRouter>
    );
};

export default App;
