import classNames from 'classnames/bind';

import styles from './OrderFilter.module.scss';

const cx = classNames.bind(styles);

function OrderFilter() {
    return (
        <ul className={cx('article')}>
            <li className={cx('item')}>
                <input
                    type="radio"
                    name="order"
                    className={cx('hidden')}
                    checked={true}
                />
                <label className={cx('order', {'is-checked': true})}>
                    금리순
                </label>
            </li>
            <li className={cx('item')}>
                <input
                    type="radio"
                    name="order"
                    className={cx('hidden')}
                    checked={false}
                />
                <label className={cx('order', {'is-checked': false})}>
                    한도순
                </label>
            </li>
        </ul>
    );
}

export default OrderFilter;
