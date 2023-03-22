import Header from './components/Header/Header';
import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Insurances from './components/Insurances/Insurances';
import Contacts from './components/Contacts/Contacts';
import Companies from './components/Companies/Companies';
import Calculator from './components/Calculator/Calculator';
import Table from './components/Table/Table';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Login />
                <Register />
                <Home />
                <Profile />
                <Insurances />
                <Contacts />
                <Companies />
                <Calculator />
                <Table />
            </main>
            <footer>
                <div className="footer">
                    <div className="f-container">
                        <div className="f-box">
                            <h4>За нас</h4>
                            <p>
                                Приемаме като своя мисия осигуряването на защита и сигурност за
                                своите клиенти чрез голямо разнообразие от застрахователни продукти.
                                Фокусът на нашата дейност е грижата за спокойствието на клиентите,
                                което постигаме предоставяйки широк избор от застрахователни услуги.
                                При нас всеки получава необходимия застрахователен продукт в кратки
                                срокове и при най-изгодни условия. Ценим свободното време на своите
                                потребители, затова се стремим да бъдем достъпни навсякъде и по
                                всяко време, чрез своите онлайн услуги, а професионална консултация
                                предлагаме в офисите от търговската ни мрежа.
                            </p>
                        </div>
                        <div className="f-box">
                            <h4>Новини</h4>
                            <input type="text" placeholder="Enter your email" />
                            <button className="third-button">Абонирай се</button>
                        </div>
                        <div className="clear-fix" />
                        <br />
                        <hr />
                    </div>
                    <div className="text-center-copyrights">© 2023 Всички права запазени</div>
                </div>
            </footer>
        </div>

    );
}

export default App;
