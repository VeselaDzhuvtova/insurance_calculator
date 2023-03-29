import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('repeatPassword');

        if (password !== repeatPassword) {
            return;
            // TODO 404
        }

        authService.register(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/')
            });
    }

    // const Register = () => {
    //     const { onRegisterSubmit } = useContext(AuthContext);
    //     const { values, changeHandler, onSubmit } = useForm({
    //         email: '',
    //         password: '',
    //         repeatPassword: '',
    //     }, onRegisterSubmit);

    return (
        <div className="register-box">
            <h1>Регистрация</h1>
            <h4>Безплатно е и отнема само минута</h4>
            <form method="POST" onSubmit={onSubmit}>
                <label>Имейл</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Имейл.."
                />
                <label>Парола</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Парола.."
                     />
                <br />
                <label>Повтори парола</label>
                <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Повтори парола.."
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