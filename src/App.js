import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { CarProvider } from './contexts/carContext';

import { AuthProvider } from './contexts/AuthContext'

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Edit from './components/EditCar/Edit';
import Catalog from './components/Catalog/Catalog/Catalog';
import Insurances from './components/Insurances/Insurances';
import Companies from './components/Companies/Companies';
import Calculator from './components/Calculator/Calculator';
import Offers from './components/Offers/Offers';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import CatalogItem from './components/Catalog/CatalogItem/CatalogItem';
import Details from './components/Details/Details';

function App() {

    return (
            <AuthProvider>
                <Header />
                <CarProvider>
                    <main>
                        <Routes>
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/' element={<Home />} />
                            <Route path='/catalog' element={<Catalog/>} />
                            <Route path='/catalog/CatalogItem' element={<CatalogItem />} />
                            <Route path='/create' element={<Create />} />
                            <Route path='/catalog/:carId/edit' element={<Edit />} />
                            <Route path='/insurances' element={<Insurances />} />
                            <Route path='/companies' element={<Companies />} />
                            <Route path='/calculator' element={<Calculator />} />
                            <Route path='/offers' element={<Offers />} />
                            <Route path='/catalog/:carId' element={<Details/>} />
                        </Routes>
                    </main>
                </CarProvider>
                <Footer />
                </AuthProvider>
    );
}

export default App;
