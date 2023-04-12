import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CarProvider } from './contexts/CarContext';

import { useService } from './services/useService';
import { RouteGard } from './components/common/RouteGuard';
import { AuthContext } from './contexts/AuthContext';
import { authServiceFactory } from './services/authService';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { CreateCar } from "./components/Create/CreateCar";
import { Catalog } from "./components/Catalog/Catalog/Catalog";
import { CarDetails } from "./components/Details/CarDetails";
import { EditCar } from "./components/EditCar/EditCar";
import { Offers } from "./components/Offers/Offers";
import { CarOwner } from './components/common/CarOwner';
import  Calculator  from "./components/Calculator/Calculator";
import { Companies } from "./components/Companies/Companies";
import { CatalogItem } from "./components/Catalog/CatalogItem/CatalogItem";
import { Insurances } from "./components/Insurances/Insurances";

function App() {


    return (
        <AuthProvider>
            <CarProvider>
                <div>
                    <Header />
                    <main>
                        <Routes>
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/' element={<Home />} />

                            <Route path='/catalog' element={
                                <RouteGard>
                                    <Catalog />
                                </RouteGard>
                            } />
                            <Route path='/catalog/CatalogItem' element={<CatalogItem />} />

                            <Route path='/create' element={
                                <RouteGard>
                                    <CreateCar />
                                </RouteGard>
                            } />

                            <Route path='/catalog/:carId/edit' element={
                                <RouteGard>
                                    <CarOwner>
                                        <EditCar />
                                    </CarOwner>
                                </RouteGard>
                            } />
                            <Route path='/insurances' element={<Insurances />} />
                            <Route path='/companies' element={<Companies />} />
                            <Route path='/calculator' element={<Calculator />} />

                            <Route path='/offers' element={
                                <RouteGard>
                                    <Offers />
                                </RouteGard>
                            } />
                            <Route path='/catalog/:carId' element={
                                <RouteGard>
                                    <CarDetails />
                                </RouteGard>
                            } />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </CarProvider>
        </AuthProvider>
    );
};
export default App;



// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocalStorage } from "./hooks/useLocalStorage";
// import { AuthContext } from './contexts/AuthContext';
// import * as carService from './services/carService';
// import { CarProvider } from './contexts/CarContext';
// import Header from './components/Header/Header';
// import Home from './components/Home/Home';
// import Create from './components/Create/Create';
// import Edit from './components/EditCar/Edit';
// import Catalog from './components/Catalog/Catalog/Catalog';
// import Insurances from './components/Insurances/Insurances';
// import Companies from './components/Companies/Companies';
// import Calculator from './components/Calculator/Calculator';
// import Offers from './components/Offers/Offers';
// import Login from './components/Login/Login';
// import Logout from './components/Logout/Logout';
// import Register from './components/Register/Register';
// import Footer from './components/Footer/Footer';
// import CatalogItem from './components/Catalog/CatalogItem/CatalogItem';
// import Details from './components/Details/Details';

// function App() {

//     const [cars, setCars] = useState([]);
//     const [auth, setAuth] = useLocalStorage('auth', {});
//     const navigate = useNavigate();

//     const userLogin = (authData) => {
//         setAuth(authData);
//     };

//     const userLogout = () => {
//         setAuth({});
//     };

//     const addCar = (carData) => {
//         setCars(state => [
//             ...state,
//             carData,
//         ]);

//         navigate('/catalog');

//     }

//     const editCar = (carId, carData) => {
//         setCars(state => state.map(x => x._id === carId ? carData : x));
//     }

//     const removeCar = (carId) => {
//         setCars(state => state.filter((x) => x._id !== carId));
//         navigate('/catalog')
//     };



//     useEffect(() => {
//         carService.getAll()
//             .then(result => {
//                 setCars(result);
//             });
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
//             <Header />
//             <CarProvider value={{ cars, addCar, editCar, removeCar }}>
//                 <main>
//                     <Routes>
//                         <Route path='/login' element={<Login />} />
//                         <Route path='/logout' element={<Logout />} />
//                         <Route path='/register' element={<Register />} />
//                         <Route path='/' element={<Home />} />
//                         <Route path='/catalog' element={<Catalog  />} />
//                         <Route path='/catalog/CatalogItem' element={<CatalogItem  />} />
//                         <Route path='/create' element={<Create />} />
//                         <Route path='/catalog/:carId/edit' element={<Edit />} />
//                         <Route path='/insurances' element={<Insurances />} />
//                         <Route path='/companies' element={<Companies />} />
//                         <Route path='/calculator' element={<Calculator />} />
//                         <Route path='/offers' element={<Offers />} />
//                         <Route path='/catalog/:carId' element={<Details />} />
//                     </Routes>
//                 </main>
//             </CarProvider>
//             <Footer />
//         </AuthContext.Provider>
//     );
// }

// export default App;
