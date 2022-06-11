import email from '../assets/images/email.png'

const Footer = () => {
    return (
        <>
        <footer class = "footer text-center">
        <div class = "container">
            <div class = "footer-inner text-white py grid">
                <div class = "footer-item">
                    <h3 class = "footer-head">О нас</h3>
                    <p class = "text-md">Мы собрали в одном месте более 50 специалистов различных направлений. Прием ведут врачи высшей категории, профессора, кандидаты наук. Ежегодно мы отправляем наших докторов на стажировки и мастер-классы в страны ближнего и дальнего зарубежья.</p>
                    <address>
                        MClinic <br/>
                        г. Алматы, пр. Абая 52г<br/>
                        050040 <br/>
                        Қазақстан
                    </address>
                </div>

                <div class = "footer-item">
                    <h3 class = "footer-head">Теги</h3>
                    <ul class = "tags-list flex">
                        <li>медицинское обслуживание</li>
                        <li>чрезвычайная ситуация</li>
                        <li>терапия</li>
                        <li>хирургия</li>
                        <li>лечение</li>
                    </ul>
                </div>

                <div class = "footer-item">
                    <h3 class = "footer-head">Ссылки</h3>
                    <ul>
                        <li><a href = "/#service" class = "text-white">Наши услуги</a></li>
                        <li><a href = "/#doc-panel" class = "text-white">Наши врачи</a></li>
                    </ul>
                </div>

                <div class = "footer-item" id='contacty'>
                    <h3 class = "footer-head">Время работы</h3>
                    <ul class = "appointment-info">
                        <li>Будни дни: 8:00 - 18:00</li>
                        <li>Выходные дни: 11:00 - 17:00</li>
                        <li>
                           
                            <span>mclinic@gmail.com</span>
                        </li>
                        <li>
                            
                            <span>+7 777 012 34 56</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
        </>
    );
}

export default Footer;