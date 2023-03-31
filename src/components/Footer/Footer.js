import React, { useState } from 'react';

function Footer() {
    const [email, setEmail] = useState(''); // създаване на състояние за запазване на имейлите
    const [isSaved, setIsSaved] = useState(false); // създаване на състояние за показване на съобщение за успешно запазване

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Имейлът ${email} е запазен!`); // тук можете да направите необходимите манипулации със запазените имейли

        setIsSaved(true);
        // изчистване на полето за въвеждане на имейла след като се натисне бутона
        setEmail('');
    }

    function handleInputChange(event) {
        setEmail(event.target.value);
        setIsSaved(false);

        setTimeout(() => {
            setIsSaved(false); // промяна на състоянието обратно на "false" след 5 секунди
          }, 8000);
    }

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
                            {isSaved && <p>Имейлът е успешно запазен!</p>}
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Въведи своя имейл"
                                    value={email}
                                    onChange={handleInputChange}
                                />
                                <button id="third-button" type="submit">Абонирай се</button>
                            </form>
                        </div>
                        <div className="text-center-copyrights">© 2023 Всички права запазени</div>
                </section>
            </footer>
        );
    };


    export default Footer;