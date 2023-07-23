import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import { Route, Router, Routes } from 'react-router-dom';

export default function App() {

    return (
        <div className="app">
            <Navbar />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/student" element={<Home/>} />
                    <Route exact path="/student/" element={<Home/>} />
                </Routes>
            </Router>
        </div>
    )
}
