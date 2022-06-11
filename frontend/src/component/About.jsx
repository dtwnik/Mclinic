import About from '../assets/images/about-img.png'
const about = () => {
    return (
        <>
        <section id = "about" class = "about py">
            <div class = "about-inner">
                <div class = "container grid">
                    <div class = "about-left text-center">
                        <div class = "section-head">
                            <h2>О нас</h2>
                            <div class = "border-line"></div>
                        </div>
                        <p class = "text text-lg">Mclinic – это многопрофильный медицинский центр в Алматы. Мы собрали в одном месте более 50 специалистов различных направлений. Прием ведут врачи высшей категории, профессора, кандидаты наук. Ежегодно мы отправляем наших докторов на стажировки и мастер-классы в страны ближнего и дальнего зарубежья.</p>
                        
                    </div>
                    <div class = "about-right flex">
                        <div class = "img">
                            <img src = {About}/>
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    );
}

export default about;