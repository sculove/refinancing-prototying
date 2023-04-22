import LoanSummarySwitch from './LoanSummarySwitch';
import LoanSwitch from './LoanSwitch';
import ResultContent from './ResultContent';

// 대출_심사_완료
export default function ProductResult() {
    return (
        <ResultContent>
            <LoanSummarySwitch />
            <LoanSwitch />
        </ResultContent>
    );
}
