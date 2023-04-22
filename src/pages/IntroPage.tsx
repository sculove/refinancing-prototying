import Header from '../components/Header';
import LoanTypeNavigation from '../components/LoanTypeNavigation';
import Home from '../components/Home';
import CreditIntro from '../components/CreditIntro';

export default function Credit() {
    return (
        <>
            <Header main={true}/>
            <LoanTypeNavigation />
            <Home><CreditIntro/></Home>
        </>
    );
}
