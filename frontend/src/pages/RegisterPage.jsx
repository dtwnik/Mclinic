import '../css/Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import photo from '../assets/images/doctor.png'
const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onRegister = async (e) => {
        e.preventDefault()
        if (username !== "" && password !== "") {
            try{
            const data = await axios.post(
                'http://127.0.0.1:8000/api/User/',
                { username: username, password: password }
            )
            alert("Вы успешно зарегистрировались")
            localStorage.setItem("mclinic_id", data.data.id)
            localStorage.setItem("mclinic_username", data.data.username)
            localStorage.setItem("mclinic_token", data.data.token)
            navigate('/')
            }
            catch(e) {
                alert("ГГ ВП")
            }
        }
    }
    return (
        <div className='body'>
            <div className='auth'>
                <div className='side'>
                    <img src={photo}></img>
                </div>
                <div className='form'>
                    <h2>ЗАРЕГИСТРИРОВАТЬСЯ</h2>
                    <input type="text" name='username' class="field" placeholder='Введите Имя пользователя' onChange={(e) => setUsername(e.target.value)}></input>
                    <input type="password" name='password' className='field' placeholder='Введите пароль' onChange={(e) => setPassword(e.target.value)}></input>
                    <input type="submit" value="ЗАРЕГИСТРИРОВАТЬСЯ" id='submit' onClick={onRegister}></input>
                    <Link to={"/login/"} className="link">Авторизоваться</Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;