import Header from '../component/HeaderNav';
import Footer from '../component/Footer';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Appointment = () => {
    const [appState, setAppState] = useState([]);
    const token = `Token ${localStorage.getItem('mclinic_token')}`
    useEffect(() => {
        const Appointment = 'http://127.0.0.1:8000/api/Appointment/';
        axios.get(Appointment, {
            headers: {
              "Authorization": token
            }
          }).then((resp) => {
          const allAppointment = resp.data;
          setAppState(allAppointment);
        });
      }, [setAppState]);
      console.log(token)
        const deleteReq = (id) =>{
            const remove = axios.delete(id, {headers: {
                "Authorization": token
            }})
            window.location.reload()
        }
       
    return (
        <>
            <Header />
            <div className='myticket'>
                <h2 className="heading">Ваши записи: </h2>
                {appState.map((Ticket) =>
                      <div className='ticket'>
                      <div key={Ticket.id}>
                          <div className='movie_name'>
                              Номер записи: {Ticket.url.split('/')[5]}
                          </div>
                          <div className='movie_name'>
                              Телефон : {Ticket.number}
                          </div>
                          <div className='movie_name'>
                                E-mail: {Ticket.email}
                          </div>
                          <div className='movie_name'>
                              День консультации: {Ticket.date}
                          </div>
                          <div className='movie_name'>
                              Консультации к {Ticket.post+'у'}
                          </div>
                          <div className='movie_name'>
                              Доктор : {Ticket.doctor}
                          </div>
                        </div><div className='delete'>
                            <button onClick={()=> deleteReq(Ticket.url)}>Удалить</button>
                        </div>
                        
                        </div>
                )}
            </div>
            <Footer/>
        </>
    );
}

export default Appointment;