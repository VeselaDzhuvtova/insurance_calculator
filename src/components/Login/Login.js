import { useContext } from "react";

import { AuthContext } from "../../contexts/authContext";
import { useForm } from "../../hooks/useForm";


const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <div className="login-box">
            <h1>Вход</h1>
            <form id="login" method="POST" onSubmit={onSubmit}>
                <label>Имейл</label>
                <input
                    type="text"
                    name={LoginFormKeys.Email}
                    placeholder="Email.."
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                />
                <label>Парола</label>
                <input
                    type="password"
                    name={LoginFormKeys.Password}
                    placeholder="Password.."
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}
                />
                <input type="submit" className="btn_submit" value="Login" />
            </form>
            <p>
                Нямаш акаунт? <a href="/Register">Регистрация</a>
            </p>
            <h3 className="noCars">Грешно потребителско име или парола</h3>
        </div>
    );
};

