import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import { AppContextProvider } from './context/AppContext';

function App() {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />}></Route>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
}

export default App;
