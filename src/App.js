import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import WishlistsPage from './components/views/WishlistsPage/WishlistsPage';
import TripsPage from './components/views/TripsPage/TripsPage';
import InboxPage from './components/views/InboxPage/InboxPage';
import ProfilePage from './components/views/ProfilePage/ProfilePage';
import { AppContextProvider } from './context/AppContext';
import AnimatedDiv from './components/atoms/AnimatedDiv/AnimatedDiv';
import BottomBar from './components/molecules/BottomBar/BottomBar';

function App() {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />}></Route>
                    <Route
                        path='/wishlists'
                        element={<WishlistsPage />}
                    ></Route>
                    <Route path='/trips' element={<TripsPage />}></Route>
                    <Route path='/inbox' element={<InboxPage />}></Route>
                    <Route path='/profile' element={<ProfilePage />}></Route>
                </Routes>
                <div className='bottom_bar_navigation'>
                    <AnimatedDiv
                        animProgress={[0, 0.1, 0.4, 0.5, 1]}
                        opacityProgress={[1, 1, 1, 1, 1]}
                        yPosProgress={[0, 0, 0, 70, 0]}
                    >
                        <BottomBar />
                    </AnimatedDiv>
                </div>
            </BrowserRouter>
        </AppContextProvider>
    );
}

export default App;
