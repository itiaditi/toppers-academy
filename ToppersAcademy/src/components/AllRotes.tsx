import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';

const AllRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />           
            <Route path="/login" element={<></>} />
            <Route path="/signup" element={<></>}/>
        </Routes>
    );
};

export { AllRoutes };
