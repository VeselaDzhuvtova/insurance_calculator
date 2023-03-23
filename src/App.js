import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Insurances from './components/Insurances/Insurances';
import Contacts from './components/Contacts/Contacts';
import Companies from './components/Companies/Companies';
import Calculator from './components/Calculator/Calculator';
import Offers from './components/Offers/Offers';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Create from './components/Create/Create';

function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/insurances' element={<Insurances />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/companies' element={<Companies />} />
                    <Route path='/calculator' element={<Calculator />} />
                    <Route path='/offers' element={<Offers />} />
                </Routes>
            </main>
            <Footer />
        </Fragment>

    );
}

export default App;
