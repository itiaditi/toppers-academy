import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import Login from '../pages/Login';
import Signup from './Signup';
import { SearchComponent } from '../pages/SearchComponent';
import Card1 from '../component/Body';
import Profile from '../pages/Profile';
import Teachers from '../pages/Teachers';
import Progress from '../pages/Progress';
import Body from '../component/Body';
import { PrivateRoute } from './PrivateRoute';

const AllRoutes: React.FC = () => {
    return (<>
        <Routes>
            <Route path="/" element={<LandingPage/>} />           
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/search" element={<SearchComponent/>}/>
            <Route path="/card" element={<Card1/>}/>
    <Route path="/profile" element={<Profile/>} />
    <Route path="/progress" element={<Progress />} />
    <Route path="/teachers" element={<Teachers />} />
    <Route path="/dashboard" element={<PrivateRoute><Body/></PrivateRoute>}/>
        </Routes>
        </>
    );
};

export { AllRoutes };
