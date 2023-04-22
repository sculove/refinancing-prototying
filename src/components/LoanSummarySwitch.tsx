import classNames from 'classnames/bind';

// import CorpChips from '$/components/commons/CorpChips';
import {ValidTimer} from './LoanSummary';
import LoanSummaryLink from './LoanSummaryLink';

import styles from './LoanSummarySwitch.module.scss';
import CorpChips from './CorpChips';

const cx = classNames.bind(styles);

function LoanSummarySwitch() {
    return (
        <div className={cx('article')}>
            <h3 className={cx('title')}>김페이님의 갈아타기 결과</h3>
            <ValidTimer />
            <div className={cx('corp-chip-wrapper')}>
                <CorpChips />
            </div>
            <div className={cx('link-wrapper')}>
                <LoanSummaryLink isSwitch={true} />
            </div>
        </div>
    );
}

export default LoanSummarySwitch;
