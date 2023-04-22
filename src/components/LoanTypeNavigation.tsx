import classNames from 'classnames/bind';
import styles from './LoanTypeNavigation.module.scss';

const cx = classNames.bind(styles);

export default function LoanTypeNavigation() {
    return (
        <div className={cx('article', {'type-intro': true})} role="tablist">
            <div className={cx('inner')}>
                <button
                    role="tab"
                    type="button"
                    className={cx('tab', {'is-selected': true})}>
                    신용 대출
                </button>
                <button
                    role="tab"
                    type="button"
                    className={cx('tab', {'is-selected': false})}>
                    사업자 대출
                </button>
            </div>
        </div>
    );
}
