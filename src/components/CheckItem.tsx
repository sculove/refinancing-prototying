import classNames from 'classnames/bind';

import IconCheck from '../assets/IconSvg/IconCheck';
// import IconArrowRight from '../assets/IconSvg/IconArrowRight';

import type {PropsWithChildren} from 'react';

import styles from './CheckItem.module.scss';

const cx = classNames.bind(styles);

type TCheckItemProps = PropsWithChildren<{
    id: string;
    text: string;
    checked: boolean;
}>;

function CheckItem({id, text, checked, children}: TCheckItemProps) {
    return (
        <div className={cx('article', {'has-link': false})}>
            <input type="checkbox" id={id} checked={checked} className="blind"  />
            <label htmlFor={id} className={cx('label')}>
                <IconCheck width={15} height={12} fill={checked ? '#09aa5c' : '#c8cacc'} />
                {text}
            </label>
            {children}
        </div>
    );
}

export default CheckItem;
