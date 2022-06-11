import Header from '../component/Header';
import About from '../component/About';
import Quote from '../component/Quote';
import Opportunity from '../component/Opportunity';
import '../css/MainPage.css'
import Service from '../component/Service';
import OurDoctor from '../component/OurDoctor';
import Footer from '../component/Footer';
const MainPage = () => {
    return (
        <>
        <Header/>
        <About/>
        <Quote/>
        <Opportunity/>
        <Service/>
        <OurDoctor/>
        <Footer/>
        </>
    );
}

export default MainPage;