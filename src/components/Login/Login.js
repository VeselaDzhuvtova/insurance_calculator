const Login = () => {
    return (
        <div className="login-box">
  <h1>Вход</h1>
  <form method="POST">
    <label>Имейл</label>
    <input type="text" name="email" placeholder="Email.." />
    <label>Парола</label>
    <input type="password" name="password" placeholder="Password.." />
    <input type="submit" defaultValue="Submit" />
  </form>
  <p>
    Нямаш акаунт? <a href="/Register">Регистрация</a>
  </p>
</div>

    );
};

export default Login;