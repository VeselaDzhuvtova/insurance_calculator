import { Link } from "react-router-dom";
import * as authService from '../../services/authService';
import { useNavigate } from "react-router-dom";
import  { AuthContext } from '../../contexts/AuthContext';
import { useContext } from "react";

const Login = () => { // 29.07 
    const { userLogin } = useContext(AuthContext);// 29.07 
    const navigate = useNavigate();// 29.07 
    const onSubmit = (e) => {// 29.07 
        e.preventDefault();// 29.07 

        const {// 29.07 
            email,// 29.07 
            password,// 29.07 
        } = Object.fromEntries(new FormData(e.target))// 29.07 
    
        authService.login(email, password)// 29.07 
        .then(authData => {// 29.07 
            userLogin(authData);// 29.07 
            navigate('/');// 29.07 
        }) // 29.07 
        .catch(() => {// 29.07 
            navigate('/404');// 29.07 
        });// 29.07 
    };// 29.07 

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

