import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import Login from '../pages/Login';
import Signup from './Signup';
import { SearchComponent } from '../pages/SearchComponent';

const AllRoutes: React.FC = () => {
    return (<>
        <Routes>
            <Route path="/" element={<LandingPage/>} />           
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/search" element={<SearchComponent/>}/>
        </Routes>
        </>
    );
};

export { AllRoutes };
