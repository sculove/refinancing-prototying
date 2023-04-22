import classNames from 'classnames/bind';

import styles from './LoanSummary.module.scss';
const cx = classNames.bind(styles);

export function ValidTimer() {
    return (
        <p className={cx('time', {'type-red': false})}>
            {<>유효 시간</>} {"18:40:52"}
        </p>
    );
}
