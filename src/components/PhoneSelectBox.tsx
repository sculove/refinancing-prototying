import classNames from 'classnames/bind';

import IconArrowDown from '../assets/IconSvg/IconArrowDown';

import styles from './PhoneSelectBox.module.scss';

const cx = classNames.bind(styles);

function PhoneSelectBox() {
    return (
        <>
            <strong className={cx('title')}>통신사</strong>
            <ul className={cx('article', {'type-error': false})}>
                <li className={cx('item')}>
                    <input
                        type="radio"
                        name={"skt"}
                        value={"SKT"}
                        className={cx('blind', {'is-selected': true})}
                    />
                    <label
                        className={cx('label')}>
                        SKT
                    </label>
                </li>
                <li className={cx('item')}>
                    <input
                        type="radio"
                        name={"kt"}
                        value={"kt"}
                        className={cx('blind', {'is-selected': false})}
                    />
                    <label
                        className={cx('label')}>
                        KT
                    </label>
                </li>
                <li className={cx('item')}>
                    <input
                        type="radio"
                        name={"lg"}
                        value={"lh"}
                        className={cx('blind', {'is-selected': false})}
                    />
                    <label
                        className={cx('label')}>
                        LG
                    </label>
                </li>
                <li className={cx('item')}>
                    <div className={cx('select-box', {'is-selected': false})}>
                        <button type="button" className={cx('button-select')}>
                            <span className={cx('text')}>알뜰폰</span>
                            <IconArrowDown
                                width={10}
                                height={6}
                                fill={'#767678'}
                            />
                        </button>
                    </div>
                </li>
            </ul>
        </>
    );
}
export default PhoneSelectBox;
