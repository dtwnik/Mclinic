import photo from '../assets/images/logo.png'
import ham from '../assets/images/ham-menu-icon.png'
import close from '../assets/images/close-icon.png'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
const HeaderNav = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const id = localStorage.getItem("mclinic_id")
        const login = localStorage.getItem("mclinic_username")
        setUsername(login)
        if (id && login) {
          setIsAuth(true)
        }
      }, []);
      const Logout = () => {
        const isSure = window.confirm("Вы уверены?")
        if (isSure) {
          localStorage.removeItem("mclinic_id")
          localStorage.removeItem("mclinic_username")
          localStorage.removeItem("mclinic_token")
          setIsAuth(false)
          setUsername("")
          navigate('/')
        }
    
      }
    return (
        <>
            <nav class="navbar bg-blue">
                <div class="container flex">
                    <Link to={'/'} class="navbar-brand">
                        <img src={photo} alt="site logo" />
                    </Link>
                    <button type="button" class="navbar-show-btn">
                        <img src={ham} alt="" />
                    </button>

                    <div class="navbar-collapse bg-white">
                        <button type="button" class="navbar-hide-btn">
                            <img src={close} alt="" />
                        </button>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="/#" class="nav-link">Главная</a>
                            </li>
                            <li class="nav-item">
                                <a href="/#about" class="nav-link">О нас</a>
                            </li>
                            <li class="nav-item">
                                <a href="/#service" class="nav-link">Услуги</a>
                            </li>
                            <li class="nav-item">
                                <a href="/#doc-panel" class="nav-link">Врачи</a>
                            </li>

                            <li class="nav-item">
                                <a href="/#contacty" class="nav-link">Контакты</a>
                            </li>
                            {isAuth ?
                                <div className='dropdown'>
                                    <div className='nav-link clownada'>{username}</div>
                                    <div className='dropdown-content'>
                                        <Link to={'/appointment/'} className="ssylki">Мой приемы</Link>
                                        <div onClick={Logout} className="ssylki">Выйти</div>
                                    </div>
                                </div> :
                                <>
                                    <li class="nav-item">
                                        <Link to={'/register/'} class="nav-link">Зарегистрироваться</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to={'/login/'} class="nav-link">Войти</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default HeaderNav;