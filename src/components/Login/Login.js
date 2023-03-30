import { Link } from "react-router-dom";
import * as authService from '../../services/authService';
import { useNavigate } from "react-router-dom";
import  { AuthContext } from '../../contexts/AuthContext';
import { useContext } from "react";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target))
    
        authService.login(email, password)
        .then(authData => {
            userLogin(authData);
            navigate('/');
        })
        .catch(() => {
            navigate('/404');
        });
    };





    return (
        <div className="login-box">
            <h1>Вход</h1>
            <form id="login" method="POST" onSubmit={onSubmit}>
                <label>Имейл</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email.."
                />
                <label>Парола</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password.."
                />
                <input type="submit" className="btn_submit" value="Login" />
            </form>
            <p>
                Нямаш акаунт? <Link to="/Register">Регистрация</Link>
            </p>
            
            <h3 className="noCars">Грешно потребителско име или парола</h3>
        </div>
    );
};

export default Login;

