//libraries
import React from 'react'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

//components
import Settings from './settings/Settings';
import Network from './network/Network';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main'



function App() {
    return (
        <Router>
            <AppBody>
                <Header />
                <Sidebar />
                <Routes>
                    <Route exact path='/' element={<Main />} />
                    <Route exact path='/network' element={<Network />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </AppBody>
        </Router>
    )
}

export default App

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;