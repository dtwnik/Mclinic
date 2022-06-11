import axios from 'axios'
import React, { useEffect, useState } from 'react';
const OurDoctor = () => {
    const [Doctor, setDoctor] = useState([]);
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/Doctor/';
        axios.get(apiUrl).then((resp) => {
            const allDoctor = resp.data;
            setDoctor(allDoctor);
        });
    }, [setDoctor]);
    console.log(Doctor)
    return (
        <>
            <section id="doc-panel" class="doc-panel py">
                <div class="container">
                    <div class="section-head">
                        <h2>Наши врачи</h2>
                    </div>

                    <div class="doc-panel-inner grid">
                        {Doctor.map((doctor) =>
                            <div class="doc-panel-item">
                                <div class="img flex">
                                    <img src={doctor.photo} alt="doctor image" />
                                    <div class="info text-center bg-blue text-white flex">
                                        <p class="lead">{doctor.name}</p>
                                        <p class="text-lg">{doctor.post}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    

                </div>
            </section></>
    );
}

export default OurDoctor;