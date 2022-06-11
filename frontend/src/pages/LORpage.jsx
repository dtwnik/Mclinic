
import Header from '../component/HeaderNav';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import Modal from '../component/Modal'

const LORpage = () => {
    const [modalActive, setModalActive] = useState(false)
    const [Doctor, setDoctor] = useState([]);
    
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/Doctor/';
        axios.get(apiUrl, {
            params: {
                post: "ЛОР"
            }
        }).then((resp) => {
            const allDoctor = resp.data;
            setDoctor(allDoctor);
        });
    }, [setDoctor]);
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("mclinic_username")) {
            setIsAuth(true)
        }
        else {
            setIsAuth(false)
        }
    }, [])
    console.log(isAuth)
    console.log(Doctor)
    const postReq = ()=>{
        if(isAuth){
            setModalActive(true)
        }
        else
            alert("Авторизуйтесь")
    }
    const data = "ЛОР"
    console.log(data)
    return (
        <>
            <Header />
            <div className='cont'>
                <div class="line-art flex">
                    <div></div>
                    <h1 className='lead'>ЛОР</h1>
                    <div></div>
                </div>
                <div className='doctor'>
                    {Doctor.map((doctor) =>
                        <div className='employee'>
                            <div className='emp-img'><img src={doctor.photo} /></div>
                            <h1>{doctor.name}</h1>
                            <h4>{doctor.degree}</h4>
                        </div>
                    )}
                </div>
                <div className='textcontent'>
                    <div className='text2'>
                        В Mclinic ведут прием опытные отоларингологи: Юсуров Руслан Арзиевич и Камалов Данат Шамильевич.
                        <br />
                        <br />
                        Обследование и лечение пациентов производится без боли, с помощью современного видеоэндоскопического ЛОР-оборудования Medonica. Благодаря визуальной эндоскопической системе мы имеем возможность проводить обследования ЛОР-органов в реальном времени и просматривать увеличенное изображение на мониторе.
                    </div>
                </div>
                <div className='price'>
                    <div class="line-art flex">
                        <div></div>
                        <h1 className='lead'>Стоимость:</h1>
                        <div></div>
                    </div>
                    <p>Прием врача терапевта первичный – <span className='big'>6 000 тг.</span></p><br/>
                    <p>Прием врача терапевта повторный – <span className='big'>4 000 тг.</span></p><br/>
                    <p>Дистанционная (онлайн) консультация врача терапевта – <span className='big'>5 500 тг.</span></p>
                    <p>Дистанционная консультация терапевта по ранее выявленному диагнозу (повторная онлайн консультация) – <span className='big'>4 000 тг.</span></p>
                    <button className='buttona' onClick={postReq}>Заказать прием</button>
                    <Modal active={modalActive} setActive={setModalActive} post={data}></Modal>
                </div>


            </div>
            <Footer/>
        </>
    );
}

export default LORpage;