import classNames from 'classnames/bind';

import type {PropsWithChildren} from 'react';

import styles from './AuthContent.module.scss';

const cx = classNames.bind(styles);

type TAuthContentProps = PropsWithChildren<{}>;

function AuthContent({children}: TAuthContentProps) {
    return <div className={cx('article')}>{children}</div>;
}

export default AuthContent;
