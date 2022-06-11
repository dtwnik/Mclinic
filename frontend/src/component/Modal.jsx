import '../css/Modal.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Modal = ({ active, setActive, post}) => {
    const [Doctor, setDoctor] = useState([]);
    const [Tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [nurse, setNurse] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate()
    const userId = localStorage.getItem('mclinic_id')
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/Doctor/';
        axios.get(apiUrl, {
            params: {
                post: post
            }
        }).then((resp) => {
            const allDoctor = resp.data;
            setDoctor(allDoctor);
        });
    }, [setDoctor]);
    console.log(post)
    const Req = (e) => {
        axios.post('http://127.0.0.1:8000/api/Appointment/',{number: Tel, email:email,date: date, doctor: nurse, text: "asfasgsd", client: `http://127.0.0.1:8000/api/User/${userId}/`, post: post })
        navigate('/')
    }
    return (
        <>
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <span className='close' onClick={() => {
                    setActive(false)
                }}></span>
                
                <h1 className='title'>ЗАПИСЬ НА ПРИЕМ</h1>
                <div className='desc'>
                Для записи на прием<br/>
                необходимо заполнить следующую<br/>
                информацию или позвонить по телефону<br/>
                +7(727) 303 3333
                </div>
                <form onSubmit={Req}>
                    <div className='form-group' placeholder="Ваше имя" value>
                        <input type="text" onChange={(e)=>setTel(e.target.value)} maxlength="11" className='form-control' placeholder='Ваш телефон' required/>
                    </div>
                    <div className='form-group' placeholder="Ваше имя">
                        <input type="email" onChange={(e)=>setEmail(e.target.value)}  className='form-control' placeholder='Ваш e-mail' required/>
                    </div>
                    <div className='form-group'>
                        <input type="date" onChange={(e)=>setDate(e.target.value)} inputmode="numeric" maxlength="11" className='form-control' placeholder='Желаемая дата визита' required/>
                    </div>
                    <div className='form-group'>
                        <select className='select' onChange={(e)=>setNurse(e.target.value)} >
                            <option value="">Выберите врача</option>
                            {Doctor.map((doctor)=>
                            <option >{doctor.name}</option>
                            )}
                        </select>
                    </div>
                    <div className='form-group'>
                        <textarea type="text" rows="4" cols="50" onChange={(e)=>setText(e.target.value)} className='form-control' placeholder='Сообщение' required></textarea>
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox"  required></input>
                        <label>  Я согласен отправлят свои данные</label>
                    </div>
                    <button className='button2'>Отправить</button>

                </form>
                </div>
        </div>
        </>
    );
}

export default Modal;