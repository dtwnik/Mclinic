import header from '../assets/images/header.png'
const HeaderText = () => {
    return (
        <>
            <div class="header-inner text-white text-center">
                <div class="container grid">
                    <div class="header-inner-left">
                        <h1>Ваш Самый Надежный<br /> <span>ПАРТНЕР В ОБЛАСТИ ЗДРАВООХРАНЕНИЯ</span></h1>
                        <p class="lead">лучшие услуги подбора персонала для вас</p>
                        <p class="text text-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?</p>
                        <div class="btn-group">
                            <a href="#" class="btn btn-white">Заказать звонок</a>
                            <a href="#" class="btn btn-light-blue">Авторизоваться</a>
                        </div>
                    </div>
                    <div class="header-inner-right">
                        <img src={header} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderText;