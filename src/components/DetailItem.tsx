import classNames from 'classnames/bind';

import IconArrowRight from '../assets/IconSvg/IconArrowRight';

import type {PropsWithChildren} from 'react';

import styles from './DetailItem.module.scss';

const cx = classNames.bind(styles);


type TDetailItemProps = PropsWithChildren<{
    linkText?: string;
}>;

function DetailItem({linkText, children}: TDetailItemProps) {

    return (
        <li className={cx('article', {'type-checked-item': false})}>
            {children}
            <a href="#" onClick={e => e.preventDefault()} className={cx('link')}>
                {linkText}
                <IconArrowRight width={6} height={12} fill="#bbbbbd" />
            </a>
        </li>
    );
}

export default DetailItem;
