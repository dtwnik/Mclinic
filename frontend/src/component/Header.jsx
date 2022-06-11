import HeaderText from '../component/HeaderText';
import HeaderNav from '../component/HeaderNav';
const header = () => {
    return (
        <>
            <header class="header bg-blue">
                <HeaderNav />
                <HeaderText />
            </header>
        </>
    );
}

export default header;