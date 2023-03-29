import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import React from 'react';

import * as carService from './services/carService'
import AuthContext from './contexts/authContext';
import * as authService from './services/authService';

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
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const [auth, setAuth] = useState({});

    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result);
            })
    }, []);

    const onCreateCarSubmit = async (data) => {

        const newCar = await carService.create(data);

        //TODO add to state
        setCars(state => [...state, newCar]);

        //TODO redirect to catalog
        navigate('/catalog')
    }

    // const onLoginSubmit = async (data) => {

    //     try {
    //         const result = await authService.login(data);

    //         setAuth(result);

    //         navigate('/insurances')
    //     } catch(error) {
    //         console.log('Грешно потребителско име или парола')
    //     };  

// };

const onRegisterSubmit = async (values) => {
    const { repetPassword, ...registerData } = values;
    if (repetPassword !== registerData.password) {
        return;
    }

    try {
        const result = await authService.register(registerData);

        setAuth(result);

        navigate('/insurances')
    } catch (error) {
        console.log('Грешка при регистрация')
    }
};

// const onLogout = async () => {
//     await authService.logout();

//     setAuth({});
// }

// const contextValues = {
//     // onLoginSubmit,
//     onRegisterSubmit,
//     onLogout,
//     userId: auth._id,
//     token: auth.accessToken,
//     userEmail: auth.email,
//     isAuthenticated: !!auth.accessToken
// };

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
                    <Route path='/create' element={<Create onCreateCarSubmit={onCreateCarSubmit} />} />
                    <Route path='/insurances' element={<Insurances />} />
                    <Route path='/companies' element={<Companies />} />
                    <Route path='/calculator' element={<Calculator />} />
                    <Route path='/offers' element={<Offers />} />
                    <Route path='/catalog/:carId' element={<Details />} />
                </Routes>
            </main>
            <Footer />
        </Fragment>
    </AuthContext.Provider>
);
}

export default App;
