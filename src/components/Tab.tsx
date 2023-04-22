import classNames from 'classnames/bind';

import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

type TTabProps = {
    tabList: {text: string; isSelected?: boolean;}[];
};

export default function Tab({tabList}: TTabProps) {
    return (
        <div className={cx('article', {'is-fixed': false})}>
            <ul className={cx('list')}>
                {tabList.map(({text, isSelected}, index) => {
                    return (
                        <li className={cx('item')} key={`tab-${index}`}>
                            <button
                                type="button"
                                className={cx('button', {'is-selected': isSelected})}>
                                {text}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
