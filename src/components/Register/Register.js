import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => { // 29.07     
    const { userLogin } = useContext(AuthContext); // 29.07 
    const navigate = useNavigate(); // 29.07 
    const onSubmit = (e) => { // 29.07 
        e.preventDefault(); // 29.07 

        const formData = new FormData(e.target); // 29.07 

        const email = formData.get('email'); // 29.07 
        const password = formData.get('password'); // 29.07 
        const repeatPassword = formData.get('repeatPassword'); // 29.07 

        if (password !== repeatPassword) { // 29.07 
            return; // 29.07 
            // TODO 404
        } // 29.07 

        authService.register(email, password)// 29.07 
            .then(authData => {// 29.07 
                userLogin(authData);// 29.07 
                navigate('/')// 29.07 
            });// 29.07 
    }// 29.07 

    

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