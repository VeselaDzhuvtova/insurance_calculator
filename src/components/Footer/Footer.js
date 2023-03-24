const Footer = () => {
    return (
        <footer>
            <section id="footer">
                <div>
                    <hr />
                    <section className="contacts">
                        <h3>Свържи се с нас</h3>
                        <p>Пиши ни: office@abv.bg</p>
                        <p>
                            Нашите офиси са на твое разположение от понеделник до петък от 09:00 до
                            18:00ч.
                        </p>
                        <p>Телефон за връзка с нас: 08** *** ***</p>
                    </section>

                    <h3>Новини</h3>
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