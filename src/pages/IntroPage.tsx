import Header from '../components/Header';
import LoanTypeNavigation from '../components/LoanTypeNavigation';
import Home from '../components/Home';
import CreditIntro from '../components/CreditIntro';

export default function Credit() {
    return (
        <>
            <Header title="대출비교" main={true}/>
            <LoanTypeNavigation />
            <Home><CreditIntro/></Home>
        </>
    );
}
