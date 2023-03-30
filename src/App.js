import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import { carContext } from './contexts/carContext';
import * as carService from "./services/carService";

import AuthContext from './contexts/authContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Fragment } from 'react';

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

    const carEdit = (carId, carData) => {
        setCars(state => state.map(x => x._id === carId ? carData : x))
    }

    return (
        <Fragment>
            <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
                <Header />
                <carContext.Provider value={{cars, addCarHandler, carEdit}}>
                    <main>
                        <Routes>
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/' element={<Home />} />
                            <Route path='/catalog' element={<Catalog cars={cars} />} />
                            <Route path='/catalog/CatalogItem' element={<CatalogItem />} />
                            <Route path='/create' element={<Create />} />
                            <Route path='/catalog/:carId/edit' element={<Edit />} />
                            <Route path='/insurances' element={<Insurances />} />
                            <Route path='/companies' element={<Companies />} />
                            <Route path='/calculator' element={<Calculator />} />
                            <Route path='/offers' element={<Offers />} />
                            <Route path='/catalog/:carId' element={<Details cars={cars} />} />
                        </Routes>
                    </main>
                </carContext.Provider>
                <Footer />
            </AuthContext.Provider >
        </Fragment >
    );
}

export default App;
