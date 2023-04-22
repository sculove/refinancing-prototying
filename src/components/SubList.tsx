import classNames from 'classnames/bind';

import IconArrowUpRound from '../assets/IconSvg/IconArrowUpRound'

import type {PropsWithChildren} from 'react';

import styles from './SubList.module.scss';

const cx = classNames.bind(styles);

function SubList({children}: PropsWithChildren) {
    return (
        <>
            <button type="button" className={cx('button', {'is-closed': false})}>
                <IconArrowUpRound width={12} height={6} fill="#1e1e23" />
                <span className="blind">약관 상세 {<>접기</>}</span>
            </button>
            <ul className={cx('detail-list')}>{children}</ul>
        </>
    );
}

export default SubList;
