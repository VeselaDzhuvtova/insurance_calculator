import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import * as carService from './services/carService';

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
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import CatalogItem  from './components/Catalog/CatalogItem/CatalogItem';
import Details from './components/Details/Details';

function App() {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);

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

    return (
        <Fragment>
            <Header />
            <main>
                <Routes>
                    <Route path='/login' element={<Login />} />
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

    );
}

export default App;
