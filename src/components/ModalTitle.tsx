import classnames from 'classnames/bind';

import styles from './ModalTitle.module.scss';
import { ReactNode } from 'react';

const cx = classnames.bind(styles);

type TModalTitleProps = {
    title: ReactNode;
    align?: 'center' | 'left';
};

function ModalTitle({title, align}: TModalTitleProps) {
    return (
        <div className={cx('article', {[`align-${align}`]: align})}>
            <strong className={cx('title')}>{title}</strong>
        </div>
    );
}

export default ModalTitle;
