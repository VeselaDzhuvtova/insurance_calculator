import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/authContext";

const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        repeatPassword: '',
    }, onRegisterSubmit);

    return (
        <div className="register-box">
            <h1>Регистрация</h1>
            <h4>Безплатно е и отнема само минута</h4>
            <form method="POST" onSubmit={onSubmit}>
                <label>Имейл</label>
                <input 
                type="text" 
                name="email" 
                placeholder="Имейл.."
                value={values.email}
                onChange={changeHandler} />
                <label>Парола</label>
                <input 
                type="password" 
                name="password" 
                placeholder="Парола.."
                value={values.password}
                onChange={changeHandler}  />
                <br />
                <label>Повтори парола</label>
                <input
                    type="password"
                    name="repeatPassword"
                    placeholder="Повтори парола.."
                    value={values.repeatPassword}
                    onChange={changeHandler} 
                />
                <input type="submit" className="btn_submit" value="Submit" />
            </form>
            <p>
                Вече имаш създаден акаунт? <Link to="/login">Влез тук</Link>
            </p>
        </div>

    );
};

export default Register;