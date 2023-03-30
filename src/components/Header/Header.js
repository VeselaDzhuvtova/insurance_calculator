import { useContext } from 'react';
import { Link } from 'react-router-dom';

import{ AuthContext }from '../../contexts/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header>
      <section className="navigation">
        <nav>
          <div>
            <Link to="/">НАЧАЛО</Link>

            <Link to="/insurances">ПРОДУКТИ</Link>

            <Link to="/companies">КОМПАНИИ</Link>
            {user.email
              ? <div id='user'>
                <Link to="/catalog">КАТАЛОГ</Link>
                <Link to="/create"></Link>
                <Link to="/calculator">КАЛКУЛАТОР</Link>
                <Link to="/offers"></Link>
                <Link to="/logout">ИЗХОД</Link>
                {user.email && <span style={{color: "#47439d", fontWeight: "bold"}}>{` Здравей, ${user.email} `}</span>}
              </div>
              : <div id='guest'>
                <Link to="/login">ВХОД</Link>

                <Link to="/register">РЕГИСТРАЦИЯ</Link>
              </div>
            }
          </div>
        </nav>
      </section>
      <section className="site-header">
        <h1>верен приятел винаги до теб...</h1>
        <input type="submit" className="btn_submit" value="Научи повече" />
      </section>
    </header >
  );
};

export default Header;