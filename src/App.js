import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import uniqid from 'uniqid';

import * as carService from "./services/carService";

import AuthContext from './contexts/authContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Fragment } from 'react';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Create from './components/Create/Create';
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

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result);
            });
    }, []);

    const [auth, setAuth] = useLocalStorage('auth', {});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    const addCarHandler = (carData) => {
        setCars(state => [
            ...state,
            carData,
        ]);
        navigate('/catalog');
    };

        return (
            <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
                <Fragment>
                    <Header />
                    <main>
                        <Routes>
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/' element={<Home />} />
                            <Route path='/catalog' element={<Catalog cars={cars} />} /> 
                            <Route path='/catalog/CatalogItem' element={<CatalogItem />} />
                            <Route path='/create' element={<Create addCarHandler={addCarHandler} />} />
                            <Route path='/insurances' element={<Insurances />} />
                            <Route path='/companies' element={<Companies />} />
                            <Route path='/calculator' element={<Calculator />} />
                            <Route path='/offers' element={<Offers />} />
                            <Route path='/catalog/:carId' element={<Details cars={cars} />} /> 
                        </Routes>
                    </main>
                    <Footer />
                </Fragment>
            </AuthContext.Provider>
        );
    }

    export default App;
