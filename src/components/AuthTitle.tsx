import classNames from 'classnames/bind';

import type {ReactNode} from 'react';

import styles from './AuthTitle.module.scss';

const cx = classNames.bind(styles);

type TAuthTitleProps = {
    title: ReactNode;
};

function AuthTitle({title}: TAuthTitleProps) {
    return <h2 className={cx('article')}>{title}</h2>;
}

export default AuthTitle;
