import dots from '../assets/images/4-dots.png'
import cardio from '../assets/images/service-icon-1.png'
import treat from '../assets/images/service-icon-2.png'
import help from '../assets/images/service-icon-3.png'
import aid from '../assets/images/service-icon-4.png'
const Opportunity = () => {
    return (
        <>
            <section id="services" class="services py">
                <div class="container">
                    <div class="section-head text-center">
                        <h2 class="lead">Лучший врач дает меньше всего лекарств</h2>
                        <p class="text text-lg">Идеальный способ продемонстрировать свои услуги в больнице</p>
                        <div class="line-art flex">
                            <div></div>
                            <img src={dots}/>
                                <div></div>
                        </div>
                    </div>
                    <div class="services-inner text-center grid">
                        <article class="service-item">
                            <div class="icon">
                                <img src={cardio}/>
                            </div>
                            <h3>Кардио мониторинг</h3>
                            <p class="text text-sm">Телеметрическая система кардиомониторинга Nihon Kohden предназначена для контроля показателей ЭКГ с регистрацией нарушений сердечного ритма и проводимости, уровня артериального давления, частоты сердечных сокращений, показателей сатурации кислорода.
Прибор предназначен, как для контроля каждого из показателей в отдельности, так и в их комбинации.</p>
                        </article>

                        <article class="service-item">
                            <div class="icon">
                                <img src={treat}/>
                            </div>
                            <h3>Медицинское лечение</h3>
                            <p class="text text-sm">Медицинские услуги включают в себя госпитализацию, медикаменты, медицинские проверки, рентгеновские снимки, операции, ортопедическое и медицинское оборудование.</p>
                        </article>

                        <article class="service-item">
                            <div class="icon">
                                <img src={help}/>
                            </div>
                            <h3>Экстренная помощь</h3>
                            <p class="text text-sm">Медицинская помощь, оказываемая при внезапных острых заболеваниях, состояниях, обострении хронических заболеваний, представляющих угрозу жизни пациента.</p>
                        </article>

                        <article class="service-item">
                            <div class="icon">
                                <img src={aid}/>
                            </div>
                            <h3>Первая помощь</h3>
                            <p class="text text-sm">Первая помощь — это комплекс срочных мер, направленных на спасение жизни человека. Несчастный случай, резкий приступ заболевания, отравление — в этих и других чрезвычайных ситуациях необходима грамотная первая помощь.</p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Opportunity;