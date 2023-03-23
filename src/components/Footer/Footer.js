const Footer = () => {
    return (
        <footer>
            <section id="footer">
                <div>
                    <h4>Новини</h4>
                    <input type="text" placeholder="Въведи своя имейл" />
                    <button id="third-button">Абонирай се</button>
                </div>
                <div className="clear-fix">
                    <br />
                    <hr />
                </div>
                <div className="text-center-copyrights">© 2023 Всички права запазени</div>
            </section>
        </footer>
    );
};

export default Footer;