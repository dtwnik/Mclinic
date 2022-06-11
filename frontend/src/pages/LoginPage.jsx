import '../css/Auth.css'
import photo from '../assets/images/doctor.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const onRegister = async (e) => {
        e.preventDefault()
        if (username !== "" && password !== "") {
            try {
                const data = await axios.post(
                    'http://127.0.0.1:8000/api/auth/',
                    { username: username, password: password }
                )
                alert("Вы успешно авторизовались")
                localStorage.setItem("mclinic_id", data.data.id)
                localStorage.setItem("mclinic_username", username)
                localStorage.setItem("mclinic_token", data.data.token)
                navigate('/')
            }
            catch (e) {
                alert("Имя пользователя или пароль введен неправильно")
            }
        }
    }
    return (
        <div className='body'>
        <div className='auth'>
            <form action='' className='form'>
                <h2>ВОЙТИ</h2>
                <input type="text" name='username' class="field" placeholder='Введите Имя пользователя' onChange={(e) => setUsername(e.target.value)}></input>
                <input type="password" name='password' className='field' placeholder='Введите пароль' onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit" value="ВОЙТИ" id='submit' onClick={onRegister}></input>
                <Link to={""} className="link">Забыли пароль?</Link>
                <Link to={"/register/"} className="link">Зарегистрироваться</Link>
            </form>
            <div className='side'>
                <img src={photo}></img>
            </div>
        </div>
    </div>
    );
}

export default LoginPage;