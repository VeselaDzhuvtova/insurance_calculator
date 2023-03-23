const Register = () => {
    return (
        <div className="register-box">
            <h1>Регистрация</h1>
            <h4>Безплатно е и отнема само минута</h4>
            <form method="POST">
                <label>Потребител</label>
                <input type="text" name="username" placeholder="Username.." />
                <label>Имейл</label>
                <input type="text" name="email" placeholder="Email.." />
                <label>Парола</label>
                <input type="password" name="password" placeholder="Password.." />
                <br />
                <label>Повтори парола</label>
                <input
                    type="password"
                    name="repeatPassword"
                    placeholder="Confirm Password.."
                />
                <input type="submit" defaultValue="Submit" />
            </form>
            <p>
                Вече имаш създаден акаунт? <a href="/login">Влез тук</a>
            </p>
        </div>

    );
};

export default Register;