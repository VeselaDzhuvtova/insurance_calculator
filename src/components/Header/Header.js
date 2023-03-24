import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext';

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header>
      <section className="navigation">
        <nav>

          <Link to="/">НАЧАЛО</Link>

          <Link to="/insurances">ПРОДУКТИ</Link>

          <Link to="/companies">КОМПАНИИ</Link>

          <Link to="/login">ВХОД</Link>

          <Link to="/register">РЕГИСТРАЦИЯ</Link>

          {isAuthenticated && (
            <div id='user'>
              <Link to="/catalog">КАТАЛОГ</Link>

              <Link to="/calculator">КАЛКУЛАТОР</Link>

              <Link to="/logout">ИЗХОД</Link>
            </div>
          )}


        </nav>
      </section>
      <section className="site-header">
        <h1>верен приятел винаги до теб...</h1>
        <button>НАУЧИ ПОВЕЧЕ</button>
      </section>
    </header>
  );
};

export default Header;