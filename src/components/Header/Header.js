import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <section className="navigation">
          <nav>
            <ul>
              <li>
                <Link to="/">НАЧАЛО</Link>
              </li>
              <li>
                <Link to="/insurances">ЗА НАС</Link>
              </li>
              <li>
                <Link to="/companies">КОМПАНИИ</Link>
              </li>
              <li>
                <Link to="/contacts">КОНТАКТИ</Link>
              </li>
              <li>
                <Link to="/login">ВХОД</Link>
              </li>
              <li>
                <Link to="/register">РЕГИСТРАЦИЯ</Link>
              </li>
              <li>
                <Link to="/catalog">КАТАЛОГ</Link>
              </li>
              <li>
                <Link to="/create">ДОБАВИ</Link>
              </li>
              <li>
                <Link to="/calculator">КАЛКУЛАТОР ГОА</Link>
              </li>
              <li>
                <Link to="/logout">ИЗХОД</Link>
              </li>
            </ul>
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