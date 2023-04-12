import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const{ onLoginSubmit } = useAuthContext;
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
                    id="email"
                    name={LoginFormKeys.Email}
                    placeholder="Email.."
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                />
                <label>Парола</label>
                <input
                    type="password"
                    id="password"
                    name={LoginFormKeys.Password}
                    placeholder="Password.."
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}
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

// import { Link } from "react-router-dom";
// import * as authService from '../../services/authService';
// import { useNavigate } from "react-router-dom";
// import  { AuthContext } from '../../contexts/AuthContext';
// import { useContext } from "react";
// import { useState } from "react";

// const Login = () => {  
//     const { userLogin } = useContext(AuthContext); 
//     const navigate = useNavigate(); 

//     const [invalidCredentials, setInvalidCredentials] = useState(false);


//     const onSubmit = (e) => { 
//         e.preventDefault(); 

//         const { 
//             email, 
//             password, 
//         } = Object.fromEntries(new FormData(e.target)) 
    
//         authService.login(email, password) 
//         .then(authData => { 
//             setInvalidCredentials(false);
//             userLogin(authData); 
//             navigate('/'); 
//         })  
//         .catch(() => { 
//             setInvalidCredentials(true);
//             navigate('/login'); 
//         }); 
//     }; 

//     return (
//         <div className="login-box">
//             <h1>Вход</h1>
//             <form id="login" method="POST" onSubmit={onSubmit}>
//                 <label>Имейл</label>
//                 <input
//                     type="text"
//                     id="email"
//                     name="email"
//                     placeholder="Email.."
//                 />
//                 <label>Парола</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="Password.."
//                 />
//                 <input type="submit" className="btn_submit" value="Login" />
//             </form>
//             <p>
//                 Нямаш акаунт? <Link to="/Register">Регистрация</Link>
//             </p>
//             {invalidCredentials && (
//                 <h3 className="noCars">Грешно потребителско име или парола</h3>
//             )}       
//              </div>
//     );
// };

// export default Login;

