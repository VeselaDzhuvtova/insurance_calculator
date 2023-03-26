import { Link } from "react-router-dom";

const Calculator = () => {
    return (
        <section className="goa">
            <form id="price">
                <div id="price">
                    <div id="step1">
                        <h2>Изчисли цена за ГО</h2>
                        <div id="form-step1">
                            <h3>Информация за МПС:</h3>
                            <label>Вид</label>
                            <div className="ins-dd">
                                <select
                                    className="form-control-step1"
                                    name="typeSelect"
                                    id="typeSelect"
                                >
                                    <option value={0}>Изберете</option>
                                    <option value={1}>Лек автомобил</option>
                                    <option value={2}>Товарен автомобил</option>
                                    <option value={98}>Товарен категория N1</option>
                                    <option value={3}>Мотопед</option>
                                    <option value={4}>Мотоциклет</option>
                                    <option value={7}>Товарно ремарке</option>
                                    <option value={8}>Седлови влекач</option>
                                    <option value={9}>Автобус</option>
                                </select>
                            </div>
                            <div
                                className="form-group"
                                id="SelectCapacityPanel"
                                style={{ display: "none" }}
                            >
                                <label>
                                    Товароносимост&nbsp;&nbsp;
                                    <span
                                        className="label-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Товароносимостта е равна на разликата между общото тегло на МПС с товара (F.2.) и теглото на МПС без товара (G.) (Вижте полета (F.2.) и (G.) от регистрационния талон.)"
                                    />
                                </label>
                                <div className="ins-dd">
                                    <select
                                        className="form-control-step1"
                                        name="capacitySelect"
                                        id="capacitySelect"
                                    />
                                </div>
                            </div>
                            <div className="form-group" id="dvigatel">
                                <label>
                                    Обем на двигателя&nbsp;&nbsp;
                                    <span
                                        className="label-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                    />
                                </label>
                                <div className="ins-dd">
                                    <select
                                        className="form-control-step1"
                                        name="dvigatelSelect"
                                        id="dvigatelSelect"
                                    >
                                        <option value={0}>Изберете</option>
                                        <option value={1200}>до 1200 куб. см.</option>
                                        <option value={1600}>до 1500 куб. см.</option>
                                        <option value={1800}>до 1800 куб. см.</option>
                                        <option value={2000}>до 2000 куб. см.</option>
                                        <option value={2500}>до 2500 куб. см.</option>
                                        <option value={3000}>до 3000 куб. см.</option>
                                        <option value={3001}>над 3001 куб. см.</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group" id="dvigatelTypePanel">
                                <label>Вид гориво</label>
                                <div className="ins-dd">
                                    <select
                                        className="form-control-step1"
                                        name="dvigatelType"
                                        id="dvigatelType"
                                    >
                                        <option value={0}>Изберете</option>
                                        <option value={1}>Бензин</option>
                                        <option value={5}>Бензин и газ (или метан)</option>
                                        <option value={3}>Хибрид Бензин</option>
                                        <option value={2}>Дизел</option>
                                        <option value={6}>Дизел и газ (или метан)</option>
                                        <option value={4}>Хибрид Дизел</option>
                                        <option value={7}>Електромобил</option>
                                        <option value={8}>Газ/метан</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group" id="SelectHPowerPanel">
                                <label>
                                    Мощност&nbsp;&nbsp;
                                    <span
                                        className="label-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                    />
                                </label>
                                <div className="ins-dd">
                                    <select
                                        className="form-control-step1"
                                        name="ksiliSelect"
                                        id="ksiliSelect"
                                    >
                                        <option value={0}>Изберете</option>
                                        <option value={66}>до 66 kW (90 к.с.) вкл. </option>
                                        <option value={74}>до 74 kW (101 к.с.) вкл.</option>
                                        <option value={75}>до 75 kW (102 к.с.) вкл.</option>
                                        <option value={88}>до 88 kW (120 к.с.) вкл.</option>
                                        <option value={110}>до 110 kW (150 к.с.) вкл.</option>
                                        <option value={118}>до 118 kW (160 к.с.) вкл.</option>
                                        <option value={125}>до 125 kW (170 к.с.) вкл.</option>
                                        <option value={126}>над 125 kW (170 к.с.)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Общ брой места</label>
                                <div className="ins-dd">
                                    <select
                                        className="form-control-step1"
                                        name="numberSelect"
                                        id="numberSelect"
                                    >
                                        <option value={0}>Изберете</option>
                                        <option value={2}>1+1 места</option>
                                        <option value={4}>3+1 места</option>
                                        <option value={5}>4+1 места</option>
                                        <option value={6}>5+1 места</option>
                                        <option value={7}>6+1 места</option>
                                        <option value={8}>7+1 места</option>
                                        <option value={9}>8+1 места</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>
                                    Първа регистрация на МПС&nbsp;&nbsp;
                                    <span
                                        className="label-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                    />
                                </label>
                                <div className="ins-dd">
                                    <select
                                        className="form-control-step1"
                                        name="firstRegistrationYear"
                                        id="firstRegistrationYear"
                                        fdprocessedid="h5ltr"
                                    >
                                        <option value={0}>Изберете</option>
                                        <option value={2020}>след 2020 г.</option>
                                        <option value={2010}>след 2010 г.</option>
                                        <option value={2000}>след 2000 г.</option>
                                        <option value={1990}>след 1990 г.</option>
                                        <option value={1980}>след 1980 г.</option>
                                    </select>
                                </div>
                            </div>
                            <div className="back-btn">
                                <button
                                    type="button"
                                    className="back-button"
                                    href="#"
                                    id="vaprosnik-back-step1"
                                >
                                    <span>Назад</span>
                                </button>
                            </div>
                        </div>
                        <div id="form-step2">
                            <div className="form-group">
                                <label>Предназначение на МПС</label>
                                <div className="ins-dd">
                                    <select
                                        className="form-control-step1"
                                        name="usefor"
                                        id="usefor"
                                    >
                                        <option value={0}>Изберете</option>
                                        <option value={1}>Лично ползване</option>
                                        <option value={2}>Служебно ползване</option>
                                        <option value={3}>Таксиметрови превози</option>
                                        <option value={4}>Състезателен автомобил</option>
                                        <option value={5}>Учебен</option>
                                        <option value={6}>Отдаване под наем</option>
                                        <option value={7}>Превоз на опасни товари</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>
                                    Регистрация на МПС&nbsp;&nbsp;
                                    <span
                                        className="label-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                    />
                                </label>
                                <div className="ins-dd">
                                    <select
                                        className="form-control-step1"
                                        name="reg_no"
                                        id="reg_no"
                                    >
                                        <option value="" />
                                        <option value="CA">C, CA, CB - София-град</option>
                                        <option value="PB">PB - Пловдив</option>
                                        <option value="B">B - Варна</option>
                                        <option value="A">А - Бургас</option>
                                        <option value="" disabled="disabled">
                                            ─────────
                                        </option>
                                        <option value="E">Е - Благоевград</option>
                                        <option value="B">В - Варна</option>
                                        <option value="BT">ВТ - Велико Търново</option>
                                        <option value="BH">ВН - Видин</option>
                                        <option value="BP">ВР - Враца</option>
                                        <option value="EB">ЕВ - Габрово</option>
                                        <option value="TX">ТХ - Добрич</option>
                                        <option value="K">К - Кърджали</option>
                                        <option value="KH">КН - Кюстендил</option>
                                        <option value="OB">ОВ - Ловеч</option>
                                        <option value="M">М - Монтана</option>
                                        <option value="PA">РА - Пазарджик</option>
                                        <option value="PK">РК - Перник</option>
                                        <option value="EH">ЕН - Плевен</option>
                                        <option value="PB">РВ - Пловдив</option>
                                        <option value="PP">РР - Разград</option>
                                        <option value="P">Р - Русе</option>
                                        <option value="CC">СС - Силистра</option>
                                        <option value="CH">СН - Сливен</option>
                                        <option value="CM">СМ - Смолян</option>
                                        <option value="CO">СО - София-област</option>
                                        <option value="CA">С, СА, СВ - София-град</option>
                                        <option value="CT">СТ - Стара Загора</option>
                                        <option value="T">Т - Търговище</option>
                                        <option value="X">Х - Хасково</option>
                                        <option value="H">Н - Шумен</option>
                                        <option value="Y">У - Ямбол</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>МПС е с десен волан?</label>
                                <div className="form-group-radio-container">
                                    <label className="radio-inline">
                                        <input
                                            type="radio"
                                            name="rightWheel"
                                            id="rightWheelYes"
                                            defaultValue="true"
                                        />
                                        <span className="ins-cr" /> Да
                                    </label>
                                    <label className="radio-inline">
                                        <input
                                            type="radio"
                                            name="rightWheel"
                                            id="rightWheelNo"
                                            defaultChecked=""
                                            defaultValue="false"
                                        />
                                        <span className="ins-cr" /> Не
                                    </label>
                                </div>
                            </div>
                            <h3>Информация за собственика:</h3>
                            <div className="form-group-radio-container">
                                <label className="radio-inline">
                                    <input
                                        name="vehicleOwner"
                                        id="personRadio"
                                        defaultValue="false"
                                        type="radio"
                                        defaultChecked="checked"
                                    />
                                    <span className="ins-cr" />
                                    <span /> Физическо лице
                                </label>
                                <label className="radio-inline">
                                    <br />
                                    <input
                                        name="vehicleOwner"
                                        id="companyRadio"
                                        defaultValue="true"
                                        type="radio"
                                    />
                                    <span className="ins-cr" />
                                    <span /> Юридическо лице
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    Шофьорски стаж&nbsp;&nbsp;
                                    <span
                                        className="label-tooltip"
                                        id="driving-expirience-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Шофьорски стаж на обичайния водач на МПС."
                                        style={{ display: "none" }}
                                    />
                                </label>
                                <div className="ins-dd">
                                    <select
                                        className="form-control-step1"
                                        name="driverExperience"
                                        id="driverExperience"
                                    >
                                        <option value={0}>Изберете</option>
                                        <option value="0.1">под 1 година</option>
                                        <option value={5}>До 5 години</option>
                                        <option value={9}>До 10 години</option>
                                        <option value={10}>Над 10 години</option>
                                    </select>
                                </div>
                            </div>
                            <Link to="/Offers">
                            <button type="button" className="btn-ins-button" id="calculate">
                                Изчисли
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Calculator;
