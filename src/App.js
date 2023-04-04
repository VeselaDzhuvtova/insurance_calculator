import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from "./hooks/useLocalStorage";
import { AuthContext } from './contexts/AuthContext';
import * as carService from './services/carService';
import { CarContext } from './contexts/CarContext';

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

    const [cars, setCars] = useState([]); // 29.07 преместено в CarContext
    const [auth, setAuth] = useLocalStorage('auth', {});// 29.07 преместено в CarContext
    const navigate = useNavigate();// 29.07 преместено в CarContext

    const userLogin = (authData) => {// 29.07 преместено в AuthContext
        setAuth(authData);// 29.07 преместено в AuthContext
    };

    const userLogout = () => {// 29.07 преместено в AuthContext
        setAuth({});// 29.07 преместено в AuthContext
    };

    const addCar = (carData) => {// 29.07 преместено в AuthContext
        setCars(state => [// 29.07 преместено в AuthContext
            ...state,// 29.07 преместено в AuthContext
            carData,// 29.07 преместено в AuthContext
        ]);

        navigate('/catalog');// 29.07 преместено в AuthContext

    }

    const editCar = (carId, carData) => {// 29.07
        setCars(state => state.map(x => x._id === carId ? carData : x));// 29.07
    }

    const removeCar = (carData, carId) => {// 29.07 
        setCars(state => [// 29.07 
            ...state,// 29.07 
        ]);// 29.07 
        navigate('/catalog')
    };// 29.07

    useEffect(() => {// 29.07
        carService.getAll()// 29.07
            .then(result => {// 29.07
                setCars(result);// 29.07
            });
    }, []);

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <Header />
            <CarContext.Provider value={{ cars, addCar, editCar, removeCar }}>
                <main>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/catalog' element={<Catalog cars={cars} />} />
                        <Route path='/catalog/CatalogItem' element={<CatalogItem cars={cars} />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/catalog/:carId/edit' element={<Edit />} />
                        <Route path='/insurances' element={<Insurances />} />
                        <Route path='/companies' element={<Companies />} />
                        <Route path='/calculator' element={<Calculator />} />
                        <Route path='/offers' element={<Offers />} />
                        <Route path='/catalog/:carId' element={<Details cars={cars} />} />
                    </Routes>
                </main>
            </CarContext.Provider>
            <Footer />
        </AuthContext.Provider>
    );
}

export default App;
