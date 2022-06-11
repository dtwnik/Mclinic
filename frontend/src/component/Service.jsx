import { Link} from 'react-router-dom'
const Service = () => {
    return (
        <>
        <div className="service-container" id='service'>
            <div class="line-art flex">
                <div></div>
                <h2 class="lead"> Услуги </h2>
                <div></div>
            </div>
            <div className="service-flex">
                <ul>
                    <li><Link to={'/Terapevt/'}>Терапевт</Link></li>
                    <li><Link to={'/Oculist/'}> Офтальмолог</Link></li>
                    <li><Link to={'/Neuropotolog/'}>Невропатолог</Link></li>
                    
                </ul>
                <ul>
                    <li><Link to={'/Cardiolog/'}>Кардиолог</Link></li>
                    <li><Link to={'/Revmotolog/'}>Ревматолог</Link></li>
                    <li><Link to={'/Endocrinolog/'}>Эндокринолог</Link></li>
                    
                </ul>
                <ul>
                    <li><Link to={'/LOR/'}>ЛОР</Link></li>
                    <li><Link to={'/Stomotolog/'}>Стоматолог</Link></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Service;