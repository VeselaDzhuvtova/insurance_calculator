const Insurances = () => {
    return (
        <section className="insurances">
            <div className="f-box">
                <h4>За нас</h4>
                <p>
                    Приемаме като своя мисия осигуряването на защита и сигурност за своите
                    клиенти чрез голямо разнообразие от застрахователни продукти. Фокусът
                    на нашата дейност е грижата за спокойствието на клиентите, което
                    постигаме предоставяйки широк избор от застрахователни услуги. При нас
                    всеки получава необходимия застрахователен продукт в кратки срокове и
                    при най-изгодни условия.
                </p>
            </div>
            <h2>ВИДОВЕ ЗАСТРАХОВКИ</h2>
            <ul>
                <li>
                    <a href="">
                        <img src="/Images/red1.jpg" alt="Not image found" />
                        <h3>Автомобилни</h3>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/Images/greece.jpg" alt="Not image found" />
                        <h3>Туристически</h3>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/Images/med.jpg" alt="Not image found" />
                        <h3>Медицински</h3>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/Images/home.jpg" alt="Not image found" />
                        <h3>Имуществени</h3>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/Images/truck.jpg" alt="Not image found" />
                        <h3>Отговорности</h3>
                        <p />
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/Images/life.jpg" alt="Not image found" />
                        <h3>Живот</h3>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Insurances;